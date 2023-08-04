import React, { useEffect } from 'react';
import text from '../translations/es/global.json';

const UseEffect = () => {
  useEffect(() => {
    console.log('Soy un efecto');
  });
  
  useEffect(() => {
    console.log('Soy otro efecto');
  }, []);

  return (
    <div>
      <h2>{text['functional-components-page-useeffect']}</h2>
      <p>{text['functional-components-page-message']}</p>
    </div>
  );
};

export default UseEffect;
