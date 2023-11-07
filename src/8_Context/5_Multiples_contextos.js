import { Component, createContext } from 'react';
import text from '../translations/es/global.json';

const Contexto1 = createContext('Primer Contexto');
const Contexto2 = createContext('Segundo Contexto');

const Provider = ({ children }) => {
  return (
    <Contexto1.Provider value='valor 1'>
      <Contexto2.Provider value='valor 2'>{children}</Contexto2.Provider>
    </Contexto1.Provider>
  );
};

class Componente extends Component {
  render() {
    return (
      /*
        El consumer solo se utilizará en componentes basados en clases. En el siguiente fichero veremos los context en
        componentes funcionales
      */
      <Contexto1.Consumer>
        {(valor1) => <Contexto2.Consumer>{(valor2) => <div>{`${valor1}${valor2}`}</div>}</Contexto2.Consumer>}
      </Contexto1.Consumer>
    );
  }
}

export class MultiplesContextos extends Component {
  render() {
    return (
      <div>
        <h2>{text['context-page-multiplecontext']}</h2>

        <Provider>
          <Componente />
        </Provider>
      </div>
    );
  }
}

export default MultiplesContextos;
