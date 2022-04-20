import React from 'react';
import PropTypes from 'prop-types';
import QueryString from 'query-string';
import '../css/MealsDetails.css';

const MealDetails = props => {
  const { location: { search } } = props;
  const parsedParams = QueryString.parse(search);
  const {
    img, t, i, y, ins,
  } = parsedParams;
  return (
    <div className="details-bg">
      <div className="header">
        <ul className="mealslist-heading">
          <li>
            Recipe catalogue
          </li>
          <a href="/"><button data-testid="homeLink" type="button">Back</button></a>
        </ul>
      </div>
      <div
        className="image-area details-pg"
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '0% 0%',
          backgroundSize: 'cover',
        }}
      />
      <div className="details-pg">
        <div className="title-categ">
          <h4 className="titl">{t}</h4>
        </div>
        <div className="ingredients">
          <h4>
            Ingredients:&nbsp;
            {i}
          </h4>
        </div>
      </div>
      <div className="ins">
        <div>
          <div className="ins-heading">
            <h4 className="instructions">Instructions:</h4>
            <a href={y}><button data-testid="youtubeLink" type="button">Youtube Video</button></a>
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
