import  { Component } from 'react';

class Boton extends Component {
  render() {
    console.log('Ejecutando Componente Botón');
    return <button>Botón</button>;
  }
}

class Introduccion extends Component {
  // El manejo del estado en react permite crear componentes dinámicos
  state = {}; // state es una palabra reservada

  render() {
    console.log(this.state);
    return (
      <div>
        <h2>Ciclo de vida. Montar componentes</h2>
        <button onClick={() => this.setState({ valor: 2 })}>Enviar</button>
      <Boton/>
      </div>
    );
  }
}

export default Introduccion;
