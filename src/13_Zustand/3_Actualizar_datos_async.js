import { json } from 'react-router-dom';
import text from '../translations/es/global.json';
import { asyncStore } from './store/asyncStore';

export default function ActualizarDatosAsync() {

  const values = asyncStore((state) => ({
    contador: state.contador,
    titulo: state.titulo,
    posts: state.posts,
  }));

  const { incrementar, getPosts } = asyncStore();
  return (
    <div>
      <h2>{text['zustand-page-asyncupdate']}</h2>

      <div>
        {text['zustand-page-asyncupdate-counter']}
        {values.contador}
        <br />
        {text['zustand-page-asyncupdate-title']}
        {values.titulo}
        <br />
        <button
          onClick={() => {
            incrementar(10);
          }}>
          {text['zustand-page-asyncupdate-counter-button']}
        </button>
        <button
          onClick={() => {
            getPosts();
          }}>
          {text['zustand-page-asyncupdate-get-button']}
        </button>
        <hr />
        {JSON.stringify(values.posts)}
      </div>
    </div>
  );
}
