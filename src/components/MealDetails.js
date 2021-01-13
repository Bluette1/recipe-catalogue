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
      <div className="header">
        <ul className="mealslist-heading">
          <li>
            Recipe catalogue
          </li>
          <a href="/"><button type="button">Back</button></a>
        </ul>
      </div>
      {' '}
      <div className="image details-pg">
        <div
          className="image-area details-pg"
          style={{
            backgroundImage: `url(${img})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '0% 0%',
            backgroundSize: 'cover',
          }}
        />
      </div>
      <div className="meal-row details-pg">
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
      </div>
      <div className="meal-row ins">
        <div>
          <div className="ins-heading">
            <h4 className="instructions">Instructions:</h4>
            <a href={y}><button type="button">Youtube Video</button></a>
          </div>
          <p className="body-ins">{ins}</p>
        </div>
      </div>
    </div>
  );
};

MealDetails.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MealDetails;
