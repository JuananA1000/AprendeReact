import { useState } from 'react';
import text from '../translations/es/global.json';

export default function Introduccion() {
  const [frase, setFrase] = useState('');
  const [fact, setFact] = useState('');

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const obtenerFact = () => {
    const uselessURL = 'https://uselessfacts.jsph.pl/api/v2/facts/random';

    fetch(uselessURL)
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('Error en la solicitud');
        }
        return respuesta.json();
      })
      .then((data) => {
        console.log('DATA: ', data.text);
        setFact(data.text);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    setIsButtonClicked(true);
  };

  const obtenerFrase = () => {
    const chuckNorrisURL = 'https://api.chucknorris.io/jokes/random';

    fetch(chuckNorrisURL)
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('Error en la solicitud');
        }
        return respuesta.json();
      })
      .then((data) => {
        console.log('DATA: ', data.value);
        setFrase(data.value);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    setIsButtonClicked(true);
  };

  return (
    <div>
      <h1>{text['api-conection-page-title']}</h1>

      <h2> {text['api-conection-page-intro']}</h2>

      <h3>{text['api-conection-page-intro-chuck']} </h3>
      <button onClick={obtenerFrase}>{text['api-conection-page-intro-chuck-get']} </button>
      {isButtonClicked && <p>{frase}</p>}

      <h3>{text['api-conection-page-intro-useless']} </h3>
      <button onClick={obtenerFact}>{text['api-conection-page-intro-useless-get']} </button>
      {isButtonClicked && <p>{fact}</p>}
    </div>
  );
}
