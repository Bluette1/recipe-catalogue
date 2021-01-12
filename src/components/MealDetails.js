import React from 'react';
import PropTypes from 'prop-types';
import '../MealDetails.css';

const MealDetails = ({
  title, category, imageUrl, ingredients, instructions,
}) => (
  <div>
    {' '}
    <div className="image">
      <div className="image-area">
        <img src={imageUrl} alt="meal" />
      </div>
      <div className="meal-row">
        <div className="title-category">
          <p className="category">{category}</p>
          <h4 className="title">{title}</h4>
        </div>
        <div><h4>{ingredients}</h4></div>
        <div><p>{instructions}</p></div>
      </div>
    </div>
  </div>
);

MealDetails.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
};

export default MealDetails;
