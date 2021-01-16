import React from 'react';
import PropTypes from 'prop-types';
import '../css/Meal.css';
import cx from 'classnames';

const Meal = ({
  meal, highlightMeal, hideFromList,
}) => {
  const {
    strMeal, strCategory, strMealThumb, strTags, strArea, strYoutube, strInstructions, idMeal,
  } = meal;

  const ingredients = () => {
    let ingredientsStr = '';
    const keys = Object.keys(meal);
    for (let idx = 0; idx < keys.length; idx += 1) {
      if (keys[idx].includes('strIngredient') && meal[keys[idx]] !== null && meal[keys[idx]] !== '') {
        const num = keys[idx].slice(-1);
        ingredientsStr += `${meal[keys[idx]]}: ${meal[`strMeasure${num}`]}, `;
      }
    }
    const resultIngredientsStr = ingredientsStr.slice(0, -2);
    return resultIngredientsStr;
  };

  const detailsUrl = () => `/details?img=${strMealThumb}&t=${strMeal}&c=${strCategory}
  &i=${ingredients()}&st=${strArea}&y=${strYoutube}&ins=${strInstructions}`;

  return (
    <div
      className={cx(
        'meal-row',
        meal.highlight && 'highlighted',
        meal.hide && 'hidden',
      )}
    >
      <div className="title-category">
        <p className="category">{strCategory}</p>
        <p className="area category">{strArea}</p>
        <h4 className="title">{strMeal}</h4>
      </div>
      <div>
        <div
          className="image-area"
          style={{
            backgroundImage: `url(${strMealThumb})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: 'cover',
          }}
        >
          {' '}
        </div>
      </div>
      <div className="right">
        <h4 className="tags">
          Tags:&nbsp;
          {strTags}
        </h4>
        <a href={detailsUrl()}><button type="button" className="details">View details</button></a>
        <button type="button" className="hide" onClick={() => hideFromList(idMeal)}>Hide from list</button>
        <button type="button" className="highlight" onClick={() => highlightMeal(idMeal)}>Highlight Meal</button>
      </div>

    </div>
  );
};

Meal.propTypes = {
  meal: PropTypes.objectOf(PropTypes.string).isRequired,
  highlightMeal: PropTypes.func.isRequired,
  hideFromList: PropTypes.func.isRequired,
};

export default Meal;
