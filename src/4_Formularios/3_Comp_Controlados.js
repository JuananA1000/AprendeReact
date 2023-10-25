import { useState } from 'react';
import text from '../translations/es/global.json';

export default function CompControlados() {
  const [valor, setValor] = useState('');

  const cambiarValor = (e) => {
    setValor(e.target.value);
  };

  return (
    <div>
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
        {valor.length >= 1 && valor.length < 5 ? (
          <p>
            <span style={{ backgroundColor: 'red', color: 'white' }}>
              {text['form-page-controlled-components-length-less-than']}
            </span>
          </p>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
