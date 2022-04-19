import '../css/App.css';
import React from 'react';
import MealsList from '../containers/MealsListByCategory';
import CategoryFilter from './CategoryFilter';

export default function App() {
  return (
    <div className="content">
      <ul className="mealslist-heading">
        <li>
          Recipe Catalogue
        </li>
        <li><a href="/"><button type="button">Meals</button></a></li>
        <CategoryFilter />
      </ul>
      <div>
        <MealsList />
      </div>
    </div>
  );
}
