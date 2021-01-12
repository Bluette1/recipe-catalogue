import './App.css';
import React from 'react';
import MealsList from '../containers/MealsList';
import CategoryFilter from './CategoryFilter';

export default function App() {
  return (
    <div className="content">
      <div className="header">
        <ul className="mealslist-heading">
          <li>
            Recipe catalogue
          </li>
          <li>Meals</li>
          <CategoryFilter />
        </ul>
        <i className="fas fa-user-circle fa-3x" aria-hidden="true" />
      </div>
      <div>
        <MealsList />
      </div>
    </div>
  );
}
