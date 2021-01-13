import '../css/App.css';
import React from 'react';
import MealsList from '../containers/MealsList';
import CategoryFilter from './CategoryFilter';

export default function App() {
  return (
    <div className="content">
      <div className="header">
        <ul className="mealslist-heading">
          <li>
            Recipe Catalogue
          </li>
          <a href="/"><button type="button"> Meals</button></a>
          <CategoryFilter />
        </ul>
      </div>
      <div>
        <MealsList />
      </div>
    </div>
  );
}
