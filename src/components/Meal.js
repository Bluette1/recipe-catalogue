import React from 'react';
import PropTypes from 'prop-types';
import '../Meal.css';

const Meal = ({
  title, category, imageUrl,
}) => (
  <div className="meal-row">
    <div className="title-category">
      <p className="category">{category}</p>
      <h4 className="title">{title}</h4>
    </div>
    <div className="image">
      <div className="image-area">
        <img src={imageUrl} alt="meal" />
      </div>
    </div>
  </div>
);

Meal.propTypes = { category: PropTypes.string.isRequired };
Meal.propTypes = { title: PropTypes.string.isRequired };
Meal.propTypes = { imageUrl: PropTypes.string.isRequired };

export default Meal;
