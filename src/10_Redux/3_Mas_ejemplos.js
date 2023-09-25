import { increment, decrement } from './store/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
export default function MasEjemplos() {
  const dispatch = useDispatch();
  // const count = useSelector((state) => state.counter.count);

  return (
    <div>
      <h2>10.3. Más Ejemplos</h2>

      <div>
        <h3>Contador </h3>
        <button onClick={() => dispatch(increment())}>Incrementar</button>
        <button onClick={() => dispatch(decrement())}>Decrementar</button>
      </div>

      <div>
        <h3>Lista de Tareas</h3>
      </div>

      <div>
        <h3>Cambiar Tema</h3>
      </div>
    </div>
  );
}
