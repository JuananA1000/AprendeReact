import text from '../translations/es/global.json';
import { updateStore } from './store/updateStore';

export default function ActualizarDatos() {

  const values = updateStore((state) => ({
    contador: state.contador,
    titulo: state.titulo,
  }));

  // Hay dos maneras de llamar a la funcion del store:
  // const incrementar = updateStore((state) => state.incrementar);
  const { incrementar } = updateStore();

  return (
    <div>
      <h2>{text['zustand-page-update']}</h2>

      <div>
        {text['zustand-page-update-counter']}
        {values.contador}
        <br />
        {text['zustand-page-update-title']}
        {values.titulo}
        <br />
        <button
          onClick={() => {
            incrementar(10);
          }}>
          {text['zustand-page-update-button']}
        </button>
      </div>
    </div>
  );
}
