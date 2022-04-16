import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { changeFilter } from '../actions/index';

const CategoryFilter = ({ handleFilterChange }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => {
        const list = response.data.categories;
        const categoryList = [];
        list.forEach(category => {
          categoryList.push(category.strCategory);
        });
        setData(categoryList);
      });
  }, []);

  const mealCategories = ['All', ...data];
  return (
    <select
      className="category-filter"
      onChange={e => handleFilterChange(e.target.value)}
    >
      <option>CATEGORIES</option>
      {mealCategories.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default connect(null, { handleFilterChange: changeFilter })(CategoryFilter);
