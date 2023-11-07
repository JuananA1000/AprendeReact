import { Component, createContext } from 'react';
import text from '../translations/es/global.json';

const Contexto = createContext('Valor por defecto');

const Provider = ({ children }) => {
  return <Contexto.Provider value='Otro valor'>{children}</Contexto.Provider>;
};

class Componente extends Component {
  // static contextType = Contexto;
  render() {
    // console.log('This context en Componente: ', this.context);
    return <p>{text['context-page-contextclass-component']}</p>;
  }
}
Componente.contextType = Contexto;

export class ContextEnComponentesDeClase extends Component {
  render() {
    return (
      <div>
        <h2>{text['context-page-contextclass']}</h2>

        <Provider>
          <Componente />
          {/* 
            El Consumer imprime el valor del Provider
          */}
          <Contexto.Consumer>{(valor) => <p>{valor}</p>}</Contexto.Consumer>
        </Provider>
      </div>
    );
  }
}

export default ContextEnComponentesDeClase;
