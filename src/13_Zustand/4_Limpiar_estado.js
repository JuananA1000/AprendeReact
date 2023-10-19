import text from '../translations/es/global.json';
import { clearStore } from './store/clearStore';

export default function LimpiarEstado() {
  const values = clearStore((state) => ({
    contador: state.contador,
    titulo: state.titulo,
    posts: state.posts,
  }));

  const { incrementar, getPosts, clear } = clearStore();
  return (
    <div>
      <h2>{text['zustand-page-clear']}</h2>

      <div className='greenGradient'>
        {text['zustand-page-clear-counter']}
        {values.contador}
        <br />
        {text['zustand-page-clear-title']}
        {values.titulo}
        <br />
        <button
          onClick={() => {
            incrementar(10);
          }}>
          {text['zustand-page-clear-counter-button']}
        </button>
        <button
          onClick={() => {
            getPosts();
          }}>
          {text['zustand-page-clear-get-button']}
        </button>
        <button
          onClick={() => {
            clear();
          }}>
          {text['zustand-page-clear-clear-button']}
        </button>
        <hr />
        {JSON.stringify(values.posts)}
      </div>
    </div>
  );
}
