import { Component } from 'react';
import text from '../translations/es/global.json';

class Boton extends Component {
  render() {
    console.log('Ejecutando Componente Botón');
    return <button>{text['class-component-page-rendercomp-button']}</button>;
  }
}

class Introduccion extends Component {
  // El manejo del estado en react permite crear componentes dinámicos
  state = {}; // state es una palabra reservada

  render() {
    console.log(this.state);
    return (
      <div>
        <h2>{text['class-component-page-rendercomp']}</h2>

        <button onClick={() => this.setState({ valor: 2 })}>{text['class-component-page-rendercomp-send']}</button>
        <Boton />
      </div>
    );
  }
}

export default Introduccion;
