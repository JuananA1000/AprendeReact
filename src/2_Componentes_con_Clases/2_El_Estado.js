import { Component } from 'react';
import text from '../translations/es/global.json';

class Introduccion extends Component {
  // El manejo del estado en react permite crear componentes dinámicos
  state = {}; // state es una palabra reservada

  render() {
    console.log(this.state);
    return (
      <div>
        <h2>{text['class-component-page-state']}</h2>
        <button onClick={() => this.setState({ valor: 2 })}>{text['class-component-page-state-button']}</button>
      </div>
    );
  }
}

export default Introduccion;
