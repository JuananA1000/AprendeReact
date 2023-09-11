// ESte hook personalizado es igual a useFetch(), pero lo separamos por claridad
import useCargando from './customHOOKS/useCargando';
import text from '../translations/es/global.json';

export default function ComprobarPeticion() {
  const { data, cargando, error } = useCargando('https://jsonplaceholder.typicode.com/users');
  return (
    <div>
      <h2>{text['api-conection-page-checkrequest']} </h2>

      <h3>{text['api-conection-page-checkrequest-api']} </h3>
      <div>
        <ul>
          {error && <p style={{ color: 'red' }}>{text['api-conection-page-checkrequest-error']} {error}</p>}
          {
            cargando && <p style={{ color: 'orange', fontWeight: 'bolder' }}>{text['api-conection-page-checkrequest-loading']}Cargando...</p>
            /*
            Podremos ver este JSX si, en la esquina superior izda de la consola del navegador cambiamos el parámetro
            NO THROTTLING por SLOW 3G
          */
          }
          {data?.map((usuario) => (
            <li key={usuario.id}>{usuario.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
