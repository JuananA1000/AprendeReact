// ESte hook personalizado es igual a useFetch(), pero lo separamos por claridad
import useAbort from './customHOOKS/useAbort';
import text from '../translations/es/global.json';

export default function CancelarPeticion() {
  const { data, cargando, error, abortarPeticion } = useAbort('https://jsonplaceholder.typicode.com/users');
  return (
    <div>
      <h2>{text['api-conection-page-rejectrequest']} </h2>

      <h3>{text['api-conection-page-rejectrequest-api']} </h3>
      <div>
        <button onClick={abortarPeticion}>{text['api-conection-page-rejectrequest-reject']} </button>
        <ul>
          {error && (
            <p style={{ color: 'red' }}>
              {text['api-conection-page-rejectrequest-error']} {error}
            </p>
          )}
          {
            cargando && (
              <p style={{ color: 'orange', fontWeight: 'bolder' }}>
                {text['api-conection-page-rejectrequest-loading']}
              </p>
            )
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
