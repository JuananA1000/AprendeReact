import { useState, useEffect } from 'react';
import text from '../translations/es/global.json';
import axios from 'axios';
import Loader from './components/Loader';

// TUTORIAL: https://www.youtube.com/watch?v=R5LTmCSOVCg

export default function Introduccion() {
  const [actores, setActores] = useState([]);

  useEffect(() => {
    const obtenerPersonajes = async () => {
      // Llamamos a la api...
      const url = 'https://thronesapi.com/api/v2/Characters';
      const resultado = await axios.get(url);

      // ...comprobamos su contenido (esto no es obligatorio)...
      console.log('AXIOS GET: ', resultado.data);

      // ...y, finalmente los guardamos
      setActores(resultado.data);
    };
    obtenerPersonajes();
  }, []);

  console.log('LISTADO: ', actores);

  return (
    <div>
      <h1>{text['axios-page-title']}</h1>
      <h2>{text['axios-page-intro']}</h2>

      <ul>
        {/* 
          Mientras la API responde, que nos muestre una palabra, un spinner o lo que sea, para saber que hay actividad
        */}
        {actores.length === 0 && <Loader />}
        {actores.map((actor, key) => (
          <div key={key} style={{ backgroundColor: 'red', width: '400px' }}>
            <h3>{actor.firstName}</h3>
            <div style={{ display: 'flex' }}>
              <img src={actor.imageUrl} alt={actor.imageUrl} width='200' />
              <div style={{ display: 'block' }}>
                <p>{actor.fullName}</p>
                <p>{actor.family}</p>
                <p>{actor.title}</p>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
