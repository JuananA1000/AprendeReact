import { useState, useEffect } from 'react';
import text from '../translations/es/global.json';

const Efecto1 = () => {
  useEffect(() => {
    console.log('Soy un efecto SIN DEPENDENCIA');
  });

  useEffect(() => {
    console.log('Soy otro efecto CON DEPENDENCIA');
  }, []);

  return (
    <div>
      <h3>{text['functional-components-page-useeffect-effect1']}</h3>
      <p>{text['functional-components-page-useeffect-message']}</p>
    </div>
  );
};

function Efecto2() {
  const [valor, setValor] = useState(0);

  useEffect(() => {
    // Este código se ejecuta cada vez que 'valor' cambia
    console.log('El valor ha cambiado:', valor);
  }, [valor]); // El segundo argumento contiene 'valor' como dependencia

  return (
    <div>
      <h3>{text['functional-components-page-useeffect-effect2']}</h3>
      <p>
        {text['functional-components-page-useeffect-effect2-value']} {valor}
      </p>
      <button onClick={() => setValor(valor + 1)}>{text['functional-components-page-useeffect-effect2-button']}</button>
    </div>
  );
}

function Efecto3() {
  const [mostrar, setMostrar] = useState(true);

  useEffect(() => {
    // Este código se ejecuta cuando el componente se monta
    console.log('Componente montado');

    return () => {
      // Este código se ejecuta cuando el componente se desmonta
      console.log('Componente desmontado');
    };
  }, []);

  return (
    <div>
      <h3>{text['functional-components-page-useeffect-effect3']}</h3>
      <button onClick={() => setMostrar(!mostrar)}>{mostrar ? 'Ocultar' : 'Mostrar'}</button>
      {mostrar && <p>{text['functional-components-page-useeffect-effect3-p']}</p>}
    </div>
  );
}

const UseEffect = () => {
  return (
    <div>
      <h2>{text['functional-components-page-useeffect']}</h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <div className='greenGradient'>
          <Efecto1 />
        </div>
        <div className='greenGradient'>
          <Efecto2 />
        </div>
        <div className='greenGradient'>
          <Efecto3 />
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
