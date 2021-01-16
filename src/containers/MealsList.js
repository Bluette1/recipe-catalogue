import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import axios from 'axios';
import QueryString from 'query-string';
import Meal from '../components/Meal';
import getMealsByFilter from '../selectors';
import { registerMeals, highlightMeal, hideMeal } from '../actions/index';
import '../css/MealsList.css';

let letter;

class MealsList extends React.Component {
  constructor(props) {
    super(props);
    this.highlightThisMeal = this.highlightThisMeal.bind(this);
    this.hideThisMeal = this.hideThisMeal.bind(this);
  }

  componentDidMount() {
    const { props: { registerMeals, location: { search } } } = this;
    const parsedParams = QueryString.parse(search);
    const { f } = parsedParams;
    letter = f;
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${f}`)
      .then(response => {
        registerMeals(response.data.meals);
      });
  }

  highlightThisMeal(id) {
    const { props: { highlightMeal } } = this;
    highlightMeal(id);
  }

  hideThisMeal(id) {
    const { props: { hideMeal } } = this;
    hideMeal(id);
  }

  render() {
    const { props: { meals } } = this;
    return (
      <div>
        {meals && meals.length ? (
          meals.map(meal => <Meal key={`meal-${meal.idMeal}`} meal={meal} highlightMeal={this.highlightThisMeal} hideFromList={this.hideThisMeal} />)
        ) : (
          <div>
            <p className="no-meals">
              There are currently no recipes that begin with the letter
              &nbsp;
              {letter}
              .
            </p>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { filter, meals } = state;
  const mealsFiltered = getMealsByFilter(meals, filter);
  return { meals: mealsFiltered };
};

MealsList.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object).isRequired,
  registerMeals: PropTypes.func.isRequired,
  highlightMeal: PropTypes.func.isRequired,
  hideMeal: PropTypes.func.isRequired,
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withRouter(connect(
  mapStateToProps,
  { registerMeals, highlightMeal, hideMeal },
)(MealsList));
