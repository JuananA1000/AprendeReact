import React from 'react';
import { useState } from 'react';
import text from '../translations/es/global.json';

import '../style/style.css';
/**
 * useState() sirve para cxontrolar el estado de un componente, y ademas cambiarlo.
 * En este fichero, en el futuro, desarrollaremos, en iuna misma interfaz dos maneras de explicar este hook:
 * 
 * - La primera tendrú un botón que encienda y apague una bombilla.
 * 
 * - La segunda tendrú un botón que cuente de uno en uno.
 */

const UseState = () => {
  const [contador, setContador] = useState(0);
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const agregarItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <h2> {text['functional-components-page-usestate']} </h2>
      <div className='a'>
        <p>
          {text['functional-components-page-usestate-counter']} {contador}
        </p>
        <button onClick={() => setContador(contador + 1)}>
          {text['functional-components-page-usestate-counter+']}
        </button>
        <button onClick={() => setContador(contador - 1)}>
          {text['functional-components-page-usestate-counter-']}
        </button>
      </div>

      <div className='a'>
        <button onClick={agregarItem}>{text['functional-components-page-add-button']} </button>
        <input type='text' value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UseState;
