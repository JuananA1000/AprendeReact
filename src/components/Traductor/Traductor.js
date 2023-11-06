import { useState } from 'react';

export default function Traductor() {
  const [idioma, setIdioma] = useState('es');
  const text = require(`../../translations/${idioma}/global.json`);

  return (
    <div>
      <button
        onClick={() => {
          setIdioma('es');
        }}>
        {text['sidebar-component-button-sp']}
      </button>
      <button
        onClick={() => {
          setIdioma('en');
        }}>
        {text['sidebar-component-button-en']}
      </button>
    </div>
  );
}
