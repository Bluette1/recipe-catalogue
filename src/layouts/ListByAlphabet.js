import React from 'react';

const ListByAlphapet = () => (
  <div className="navbar">
    <h2>Browse our list of recipes </h2>
    <div className="ul">
      <li><a href="/search?f=a">A</a></li>
      <li><a href="/search?f=b">B</a></li>
      <li><a href="/search?f=c">C</a></li>
    </div>
  </div>
);

export default ListByAlphapet;
