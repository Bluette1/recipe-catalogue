import '../css/App.css';
import React from 'react';
import MealsList from '../containers/MealsListByCategory';
import AlphabetFilter from './AlphabetFilter';

export default function App() {
  return (
    <div className="content">
      <ul className="mealslist-heading">
        <li>
          Recipe Catalogue
        </li>
        <li><a href="/"><button type="button">Meals</button></a></li>
        <AlphabetFilter />
      </ul>
      <div>
        <MealsList />
      </div>
    </div>
  );
}
