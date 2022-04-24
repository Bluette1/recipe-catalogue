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

  const parseNum = str => {
    const { length } = str;
    let index = 1;
    while (Number.isFinite(parseInt(str.charAt(length - index), 10))) {
      index += 1;
    }
    return str.slice(-1 * (index - 1));
  };

  const ingredients = () => {
    let ingredientsStr = '';
    const keys = Object.keys(meal);
    for (let idx = 0; idx < keys.length; idx += 1) {
      if (keys[idx].includes('strIngredient') && meal[keys[idx]] !== null && meal[keys[idx]] !== '') {
        const num = parseNum(keys[idx]);
        ingredientsStr += `${meal[keys[idx]]}: ${meal[`strMeasure${num}`]}, `;
      }
    }
    const resultIngredientsStr = ingredientsStr.slice(0, -2);
    return resultIngredientsStr;
  };

  const detailsUrl = () => `/details?img=${strMealThumb}&t=${strMeal}
  &i=${ingredients()}&y=${strYoutube}&ins=${strInstructions}`;

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
      <div
        className="image-area"
        style={{
          backgroundImage: `url(${strMealThumb})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 50%',
          backgroundSize: 'cover',
        }}
      />
      <div className="right">
        <h4 className="tags">
          Tags:&nbsp;
          {strTags}
        </h4>
        <a href={detailsUrl()}><button type="button" className="details">View details</button></a>
        <button type="button" className="hide" onClick={() => hideFromList(idMeal)}>Hide from list</button>
        <button type="button" className="highlight" onClick={() => highlightMeal(idMeal)}>Highlight meal</button>
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
