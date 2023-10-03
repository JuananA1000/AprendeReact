import text from '../translations/es/global.json';
import { counterStore } from './store/counterStore';
import { H1t13 } from '../components/Headers';

/*
  Zustand es una biblioteca para aplicaciones ReactJS que permite manejar del estado global de nuestra aplicación de
  manera más sencilla que Redux.

  TUTORIAL: https://youtu.be/pAHPHivDbuE?si=NT2R9FyWiaMlB_gl
*/

export default function Introduccion() {
  // Así importamos valores del estado uno por uno
  const contador = counterStore((state) => state.contador);
  const titulo = counterStore((state) => state.titulo);

  // Por otro lado, así importaremos los valores a la vez, en forma de objeto
  const values = counterStore((state) => ({
    contador: state.contador,
    titulo: state.titulo,
  }));

  return (
    <div>
      <H1t13 />

      <p>{text['zustand-page-description']}</p>
      <h2>{text['zustand-page-intro']}</h2>

      <h3>{text['zustand-page-intro-one-by-one']}</h3>
      <div style={{ backgroundColor: 'red', width: '400px' }}>
        {text['zustand-page-intro-one-by-one-counter']} {contador}
        <br />
        {text['zustand-page-intro-one-by-one-title']} {titulo}
      </div>

      <h3> {text['zustand-page-intro-object']}</h3>
      <div style={{ backgroundColor: 'red', width: '400px' }}>
        {text['zustand-page-intro-object-counter']}
        {values.contador}
        <br />
        {text['zustand-page-intro-object-title']}
        {values.titulo}
      </div>
    </div>
  );
}
