import { useRef, useEffect } from 'react';
import text from '../translations/es/global.json';

/**
 * useRef() es una herramienta que permite interactuar con el DOM de manera sencilla y eficiente. A diferencia de otros
 * hooks, useRef() no causa una re-renderización cuando cambia su valor. Es decir, que el valor de nuestras variables se
 * actualizará, y podremos verlo en la consola, pero en el DOM, el cambio no se hará efectivo mientras que no
 * refresquemos.
 */

const UseRef = () => {
  const refBasico = useRef();
  const contadorRef = useRef(0);
  const seconds = useRef(0);

  const click = () => {
    console.log('REF: ', refBasico.current);
  };

  const increment = () => {
    contadorRef.current += 1;
    console.log(contadorRef.current);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      seconds.current += 1;
      console.log(`Tiempo transcurrido: ${seconds.current} segundos`);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>{text['functional-components-page-useref']}</h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <div className='greenGradient'>
          <h3>{text['functional-components-page-useref-basic']}</h3>
          <p onClick={click} ref={refBasico}>
            {text['functional-components-page-useref-basic-p']}
          </p>
        </div>

        <div className='greenGradient'>
          <h3>{text['functional-components-page-useref-counter']}</h3>
          <p> {contadorRef.current}</p>
          <button onClick={increment}>{text['functional-components-page-useref-counter-increase-button']}</button>
        </div>

        <div className='greenGradient'>
          <h3>{text['functional-components-page-useref-seccounter']}</h3>
          {seconds.current}
        </div>
      </div>

      {/* 
        Crear un botón que refresque el navegador sin reiniciar la información
      */}
    </div>
  );
};

export default UseRef;
