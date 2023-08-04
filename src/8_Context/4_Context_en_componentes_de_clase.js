import { Component, createContext } from 'react';

const Contexto = createContext('Valor por defecto');

const Provider = ({ children }) => {
  return <Contexto.Provider value='Otro valor'>{children}</Contexto.Provider>;
};

class Componente extends Component {
  // static contextType = Contexto;
  render() {
    // console.log('This context en Componente: ', this.context);
    return <p>Hola Mundo</p>;
  }
}
Componente.contextType = Contexto;

export class ContextEnComponentesDeClase extends Component {
  render() {
    return (
      <div>
        <h2>Context en componentes de clase</h2>

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
