import React from 'react';
import PropTypes from 'prop-types';
import '../css/Meal.css';

const Meal = ({
  meal,
}) => {
  const {
    strMeal, strCategory, strMealThumb, strTags,
  } = meal;

  return (
    <div className="meal-row">
      <div className="title-category">
        <p className="category">{strMeal}</p>
        <h4 className="title">{strCategory}</h4>
      </div>
      <div className="image">
        <div className="image-area">
          <img src={strMealThumb} alt="meal" />
        </div>
      </div>
      <h4>{strTags}</h4>
    </div>
  );
};

Meal.propTypes = { meal: PropTypes.objectOf(PropTypes.string).isRequired };

export default Meal;
