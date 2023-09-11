import { useState, useEffect } from 'react';
import text from '../translations/es/global.json';
// TUTORIAL: https://www.youtube.com/watch?v=6u1RHUoXIPI

export default function FetchComoUnPRO() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((respuesta) => respuesta.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h2>{text['api-conection-page-fetchlikeapro']}</h2>

      <h3>{text['api-conection-page-fetchlikeapro-api']}</h3>
      <div>
        <ul>
          {data?.map((usuario) => (
            <li key={usuario.id}>{usuario.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
