import React from 'react';
import { useState } from 'react';
import text from '../translations/es/global.json';

import '../style/style.css';
/**
 * useState() sirve para controlar el estado de un componente, y ademas cambiarlo. Este hook recoge 3 variables:
 * - El estado en sí.
 * - La variable 'set' que recoge el cambio de estado.
 * - El estado por defecto
 *
 * Estructura:
 * const [estado, setEstado] = useState(estadoPorDefecto)
 */

const UseState = () => {
  const [contador, setContador] = useState(0);
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [luz, setLuz] = useState('☀️');
  const [claseDiv, setClaseDiv] = useState('a');

  const agregarItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const modoDia = () => {
    setLuz('☀️');
    setClaseDiv('a');

    console.log('Ahora es de día');
  };

  const modoNoche = () => {
    setLuz('🌙');
    setClaseDiv('b');

    console.log('Ahora es de noche');
  };

  return (
    <div>
      <h2> {text['functional-components-page-usestate']} </h2>

      <div className={claseDiv}>
        <h3> {text['functional-components-page-usestate-switch']} </h3>
        <div>{luz}</div>
        <button onClick={modoDia}>{text['functional-components-page-usestate-switch-on']}</button>
        <button onClick={modoNoche}>{text['functional-components-page-usestate-switch-off']}</button>
      </div>

      <div className='a'>
        <h3>{text['functional-components-page-usestate-counter']}</h3>
        <div>{contador}</div>
        <button onClick={() => setContador(contador - 1)}>
          {text['functional-components-page-usestate-counter-']}
        </button>
        <button onClick={() => setContador(contador + 1)}>
          {text['functional-components-page-usestate-counter+']}
        </button>
      </div>

      <div className='a'>
        <h3>{text['functional-components-page-usestate-add']}</h3>
        <input type='text' value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
        <button onClick={agregarItem}>{text['functional-components-page-usestate-add-button']} </button>
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
