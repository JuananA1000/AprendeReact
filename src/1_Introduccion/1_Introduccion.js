import React, { Component } from 'react';
import text from '../translations/es/global.json';

export class Introduccion extends Component {
  render() {
    return (
      <div>
        <h1>{text['introduction-page-title']}</h1>
        <p>{text['introduction-page-text']}</p>
      </div>
    );
  }
}

export default Introduccion;
