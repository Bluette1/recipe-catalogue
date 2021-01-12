import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { changeFilter } from '../actions/index';

const categories = list => {
  const categoryList = [];
  list.forEach(category => {
    categoryList.push(category.strCategory);
  });
  return categoryList;
};
const CategoryFilter = ({ handleFilterChange }) => {
  const [data, setData] = useState({ mealCategories: [] });

  useEffect(async () => {
    const result = await axios(
      'https://www.themealdb.com/api/json/v1/1/categories.php',
    );

    setData(categories(result.data));
  });
  const mealCategories = ['All', ...data.mealCategories];
  return (
    <div className="category-filter">
      <select
        onChange={e => handleFilterChange(e.target.value)}
      >
        <option>CATEGORIES</option>
        {mealCategories.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default connect(null, { handleFilterChange: changeFilter })(CategoryFilter);
