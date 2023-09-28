import text from '../translations/es/global.json';
import { useState } from 'react';

const MiComponente = ({ unaProp, otraProp }) => {
  const [mostrarImagen, setMostrarImagen] = useState(false);

  return (
    <div>
      <h2>{text['functional-components-page-intro']}</h2>
      <div
        style={{
          backgroundColor: 'yellow',
        }}>
        <p onClick={() => setMostrarImagen(!mostrarImagen)}>{text['functional-components-page-intro-phrase']}</p>
      </div>
      {mostrarImagen && <img /*src={require('../images/t3/')}*/ alt='Componente funcional básico' />}
      <br />
      {text['functional-components-page-intro-greetings1']} {unaProp}
      <br />
      {text['functional-components-page-intro-greetings2']} {otraProp}
    </div>
  );
};

export default function Introduccion() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{text['functional-components-page-title']}</h1>

      <MiComponente
        // Podemos NO mostrar estas props si no nos interesa, o mostrar solo una de ellas
        unaProp={'Hola Mundo '}
        otraProp={'Adiós Mundo'}
      />
    </div>
  );
}
