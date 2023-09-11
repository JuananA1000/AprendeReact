import { Suspense } from 'react';
import fetchData from './customHOOKS/fetchData';
import text from '../translations/es/global.json';

const apiData = fetchData('https://jsonplaceholder.typicode.com/users');

export default function RenderAsYouFetch() {
  const data = apiData.read();

  return (
    <div>
      <h2>{text['api-conection-page-renderayf']}</h2>
      <Suspense
        fallback={
          <p style={{ color: 'orange', fontWeight: 'bolder' }}>{text['api-conection-page-renderayf-loading']}</p>
        }>
        <ul>
          {data?.map((usuario) => (
            <li key={usuario.id}>{usuario.name}</li>
          ))}
        </ul>
      </Suspense>
    </div>
  );
}
