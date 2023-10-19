import text from '../translations/es/global.json';
import { getStore } from './store/getStore';

export default function MetodoGet() {
  const values = getStore((state) => ({
    contador: state.contador,
    titulo: state.titulo,
    posts: state.posts,
  }));

  const { incrementar, getPosts, clear, multiplicar } = getStore();
  return (
    <div>
      <h2>{text['zustand-page-get']}</h2>

      <div className='greenGradient'>
        {text['zustand-page-get-counter']}
        {values.contador}
        <br />
        {text['zustand-page-get-title']}
        {values.titulo}
        <br />
        <button
          onClick={() => {
            incrementar(10);
          }}>
          {text['zustand-page-get-counter-button']}
        </button>
        <button
          onClick={() => {
            getPosts();
          }}>
          {text['zustand-page-get-get-button']}
        </button>
        <button
          onClick={() => {
            clear();
          }}>
          {text['zustand-page-get-clear-button']}
        </button>
        <button
          onClick={() => {
            multiplicar(2);
          }}>
          {text['zustand-page-get-multiply-button']}
        </button>
        <hr />
        {JSON.stringify(values.posts)}
      </div>
    </div>
  );
}
