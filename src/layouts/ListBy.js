import React from 'react';

import '../css/ListByAlphabet.css';

const ListBy = () => (
  <div className="list-by-alphabet">
    <h2>Browse Available Recipes By</h2>
    <div className="ul">
      <li><a href="/alphabet">Alphabet</a></li>
      <li><a href="/category">Category</a></li>
    </div>
  </div>
);

export default ListBy;
