import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Meal from './Meal';

function FetchMeal({ meal, highlightMeal, hideFromList }) {
  const [fetchedMeal, setFetchedMeal] = useState(meal);
  const { idMeal } = meal;

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then(response => {
        const list = response.data.meals;
        const mealFetched = list[0];
        setFetchedMeal(mealFetched);
      });
  }, [fetchedMeal]);
  return (<Meal meal={fetchedMeal} highlightMeal={highlightMeal} hideFromList={hideFromList} />);
}

FetchMeal.propTypes = {
  meal: PropTypes.objectOf(PropTypes.string).isRequired,
  highlightMeal: PropTypes.func.isRequired,
  hideFromList: PropTypes.func.isRequired,
};
export default FetchMeal;
