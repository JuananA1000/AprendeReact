import React, { useRef } from 'react';
import text from '../translations/es/global.json';

const UseRef = () => {
  const ref = useRef(); // Ref Básico
  const contadorRef = useRef(0); // Guardar y acceder a un valor mutable

  const click = () => {
    console.log('REF: ', ref);
  };

  const incrementarContador = () => {
    contadorRef.current++;
    console.log('Contador:', contadorRef.current);
  };

  return (
    <>
      <h2 onClick={click} ref={ref}>
      {text['functional-components-page-useref']}
      </h2>

      <div>
        <button onClick={incrementarContador}> {text['functional-components-page-useref-add']}</button>
      </div>
    </>
  );
};

export default UseRef;
