import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import Meal from '../components/Meal';
import getMealsByFilter from '../selectors';
import { registerMeals } from '../actions/index';

class MealsList extends React.Component {
  componentDidMount() {
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      .then(response => {
        const { props: { registerMeals } } = this;
        registerMeals(response.data.meals);
      });
  }

  render() {
    const { props: { meals } } = this;
    return (
      <div>
        {meals && meals.length ? (
          meals.map(meal => <Meal key={`meal-${meal.idMeal}`} meal={meal} />)
        ) : null}
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
};

export default connect(mapStateToProps, { registerMeals })(MealsList);
