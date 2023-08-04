import React from 'react';
import text from '../translations/es/global.json';

const MiComponente = ({ unaProp, otraProp }) => {
  return (
    <div>
      <h2>{text['functional-components-page-intro']}</h2>
      <p>{text['functional-components-page-phrase']}</p>
      {text['functional-components-page-greetings1']} {unaProp}
      {text['functional-components-page-greetings2']} {otraProp}
    </div>
  );
};

export default function Introduccion() {
  return (
    <div>
      <h1>{text['functional-components-page-title']}</h1>
      <MiComponente unaProp={'Hola Mundo '} otraProp={'Adiós Mundo'} />
    </div>
  );
}
