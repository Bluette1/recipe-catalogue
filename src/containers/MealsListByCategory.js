import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import axios from 'axios';
import QueryString from 'query-string';
import { filteredMealsByAlphabet } from '../selectors';
import { registerMeals, highlightMeal, hideMeal } from '../actions/index';
import '../css/MealsList.css';
import Meal from '../components/Meal';

let category;

const MealsList = ({
  meals, filter, highlightMeal, hideMeal, registerMeals, location: { search },
}) => {
  const [renderRes, setRenderRes] = useState(false);

  const fetchMeals = async meals => {
    const fetchedMeals = [];
    await Promise.all(
      meals.map(meal => axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`)
        .then(response => {
          const list = response.data.meals;
          const fetchedMeal = list[0];
          fetchedMeals.push(fetchedMeal);
        })),
    );
    return fetchedMeals;
  };
  const getMeals = async response => {
    const meals = await fetchMeals(response.data.meals);
    return meals;
  };

  useEffect(async () => {
    const timer = setTimeout(() => {
      setRenderRes(true);
    }, 1500);

    const parsedParams = QueryString.parse(search);
    const { c } = parsedParams;
    category = c;
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${c}`)
      .then(response => {
        getMeals(response).then(fetchedMeals => {
          registerMeals(fetchedMeals);
        });
      });
    return () => clearTimeout(timer);
  }, []);

  const highlightThisMeal = id => {
    highlightMeal(id);
  };

  const hideThisMeal = id => {
    hideMeal(id);
  };

  const result = (
    <div>
      {meals && meals.length ? (
        meals.map(meal => <Meal key={`meal-${meal.idMeal}-${uuid()}`} meal={meal} highlightMeal={highlightThisMeal} hideFromList={hideThisMeal} />)
      ) : (
        <div>
          <p className="no-meals">
            There are currently no recipes in the category
            &nbsp;
            {category}
            &nbsp;
            that start with the letter
            {' '}
            {filter}
            .
          </p>
        </div>
      )}
    </div>
  );

  return (
    <div>{renderRes ? (result) : null}</div>
  );
};

const mapStateToProps = state => {
  const { filter, meals } = state;
  const mealsFiltered = filteredMealsByAlphabet(meals, filter);
  return { meals: mealsFiltered, filter };
};

MealsList.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  registerMeals: PropTypes.func.isRequired,
  highlightMeal: PropTypes.func.isRequired,
  hideMeal: PropTypes.func.isRequired,
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withRouter(connect(
  mapStateToProps,
  { registerMeals, highlightMeal, hideMeal },
)(MealsList));
