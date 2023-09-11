import useFetch from './customHOOKS/useFetch';
import text from '../translations/es/global.json';

export default function FetchConCustomHooks() {
  const { data } = useFetch('https://jsonplaceholder.typicode.com/users');

  return (
    <div>
      <h2>{text['api-conection-page-fetchcustomhook']}</h2>

      <h3>{text['api-conection-page-fetchcustomhook-api']}</h3>
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
