import text from '../translations/es/global.json';
import MasEjemplos from './3_Mas_ejemplos';
import { H1t10 } from '../components/Headers/Headers';
/*
  TUTORIAL: https://youtu.be/fMiFnbufAP4?si=xkxqMY-xoEN6YpaU
  En primer lugar, iremos a App.js e importaremos
  import { Provider } from 'react-redux';

  Además, montaremos el componente de la siguiente manera:
  <Provider store={store}>
    <IntroT10 />
    [...]
  </Provider>

  También construiremos una carpeta /store y un archivo store.js

*/

export default function Introduccion() {
  return (
    <div>
      {/* 
        Lo ideal es  que este componente Provider esté en el componente de App.js, pero quiero que ese componente se
        quede limpio y solo muestre las unidades del curso, así que se repetirá.
      */}
      <H1t10 />
    
      <h2>{text['redux-page-intro']}</h2>
      <p>Redux Toolkit es una biblioteca que simplifica la configuración y el flujo de trabajo con Redux</p>
      
    </div>
  );
}
