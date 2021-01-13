import React from 'react';
import PropTypes from 'prop-types';
import QueryString from 'query-string';
import '../css/MealsDetails.css';

const MealDetails = props => {
  const { location: { search } } = props;
  const parsedParams = QueryString.parse(search);
  const {
    img, t, c, i, st, y, ins,
  } = parsedParams;
  return (
    <div>
      {' '}
      <div className="image">
        <div className="image-area">
          <img src={img} alt="meal" />
        </div>
        <div className="meal-row">
          <div className="title-category">
            <p className="category">{c}</p>
            <p className="area category">{st}</p>
            <h4 className="title">{t}</h4>
          </div>
          <div>
            <h4>
              Ingredients:
              {i}
            </h4>
          </div>
          <div>
            <p>
              Instructions:
              {ins}
            </p>
            <p>
              Youtube Video:
              {y}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

MealDetails.propTypes = {
//   category: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   imageUrl: PropTypes.string.isRequired,
//   ingredients: PropTypes.string.isRequired,
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MealDetails;
