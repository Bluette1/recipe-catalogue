import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { changeFilter } from '../actions/index';

const CategoryFilter = ({ handleFilterChange }) => {
  const letters = ['All', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  return (
    <select
      className="category-filter"
      onChange={e => handleFilterChange(e.target.value)}
    >
      <option>SEARCH BY</option>
      {letters.map(option => (
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
