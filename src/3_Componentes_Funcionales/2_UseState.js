import { useState } from 'react';
import text from '../translations/es/global.json';

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
  const [claseDiv, setClaseDiv] = useState('day');

  const agregarItem = () => {
    if (
      inputValue.trim() !== '' &&
      items.length <= 2
      //  limitamos la cantidad de items a 3
    ) {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const modoDia = () => {
    setLuz('☀️');
    setClaseDiv('day');

    console.log('Ahora es de día');
  };

  const modoNoche = () => {
    setLuz('🌙');
    setClaseDiv('night');

    console.log('Ahora es de noche');
  };

  return (
    <div>
      <h2> {text['functional-components-page-usestate']} </h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <div className={claseDiv}>
          <h3> {text['functional-components-page-usestate-switch']} </h3>
          <div>{luz}</div>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <button onClick={modoDia}>{text['functional-components-page-usestate-switch-on']}</button>
            <button onClick={modoNoche}>{text['functional-components-page-usestate-switch-off']}</button>
          </div>
        </div>

        <div className='greenGradient'>
          <h3>{text['functional-components-page-usestate-counter']}</h3>

          {contador}
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <button onClick={() => setContador(contador - 1)}>
              {text['functional-components-page-usestate-counter-']}
            </button>
            <button onClick={() => setContador(contador + 1)}>
              {text['functional-components-page-usestate-counter+']}
            </button>
          </div>
        </div>

        <div className='greenGradient'>
          <h3>{text['functional-components-page-usestate-add']}</h3>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <input
              style={{
                borderRadius: '5px',
                background: '#CDCDCD',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              }}
              type='text'
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            />
            <button onClick={agregarItem}>{text['functional-components-page-usestate-add-button']} </button>
          </div>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UseState;
