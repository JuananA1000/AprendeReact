import { useState } from 'react';

export default function Traductor() {
  const [idioma, setIdioma] = useState('es');
  // const translations = require(`../../translations/es/${idioma}.json`);

  const toggleidioma = () => {
    if (idioma === 'es') {
      setIdioma('en');
    } else {
      setIdioma('es');
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          setIdioma('es');
        }}>
        ES
      </button>
      <button
        onClick={() => {
          setIdioma('en');
        }}>
        EN
      </button>
    </div>
  );
}
