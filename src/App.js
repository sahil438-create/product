import './App.css';
import { useEffect, useState } from 'react';

import React from 'react';
import Header from './Header';

function App() {
  const [updatedData, setupdatedData] = useState([]);
  useEffect(() => {
    showdata();
  }, []);
  const showdata = () => {
    const data = fetch('https://fakestoreapi.com/products')
      .then((newdata) => newdata.json())
      .then((data) => {
        setupdatedData(data);
      });
  };

  console.log(updatedData, 'updated');
  return (
    <div className='containner'>
      {updatedData.map((elem) => (
        <img key={elem.id} className='image' src={elem.image} alt='no-logo' />
      ))}
    </div>
  );
}

export default App;
