import React, { useState, useEffect } from 'react';
import '../css/ListByAlphabet.css';
import axios from 'axios';

const ListByCategory = () => {
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

  return (
    <div className="list-by-alphabet">
      <h2>Browse Available Recipes </h2>
      <div className="ul">
        {data.map(category => (
          <li key={category}><a href={`/filter?c=${category}`}>{category}</a></li>
        ))}
      </div>
    </div>
  );
};

export default ListByCategory;
