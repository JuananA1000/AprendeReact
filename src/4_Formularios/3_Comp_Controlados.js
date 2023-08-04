import React, { useState } from 'react';
import text from '../translations/es/global.json';

export default function CompControlados() {
  const [valor, setValor] = useState('');

  const cambiarValor = (e) => {
    setValor(e.target.value);
  };

  return (
    <>
      <div>
        <h2>{text['form-page-controlled-components']}</h2>
      </div>

      <div>
        <input
          type='text'
          name='normal'
          value={valor}
          // El evento onChange, hace que nuestro componente se actualice cada vez que pulsamos una tecla.
          onChange={cambiarValor}
        />
        {valor.length < 5 ? (
          <p>
            <span style={{ color: 'red' }}>{text['form-page-controlled-components-length-less-than']}</span>
            <br />
          </p>
        ) : (
          ''
        )}
      </div>
    </>
  );
}
