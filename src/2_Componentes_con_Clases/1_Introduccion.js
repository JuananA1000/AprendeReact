import { Component } from 'react';
import text from '../translations/es/global.json';

export class Introduccion extends Component {
  render() {
    return (
      <div>
        <h1>{text['class-component-page-title']}</h1>
      </div>
    );
  }
}

export default Introduccion;
