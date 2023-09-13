import { useReducer, useState } from 'react';
import text from '../translations/es/global.json';

/**
 * useReducer() es un hook de React que se utiliza para administrar el estado de un componente de manera más avanzada
 * que useState(). Permite manejar estados más complejos mediante la definición de una función reductora (similar a cómo
 * funciona en Redux) que actualiza el estado del componente.
 *
 * action es un objeto que siempre contendrá una propiedad 'type' que sera siempre un string, y otra 'payload' que
 * puede contgener cualquier valor
 */

const inicial = { contador: 0 };

const contadorReducer = (state, action) => {
  switch (action.type) {
    case 'incrementar':
      return { contador: state.contador + 1 };
    case 'decrementar':
      return { contador: state.contador - 1 };
    case 'set':
      return { contador: action.payload };
    default:
      return state;
  }
};

const tareasReducer = (tareas, action) => {
  switch (action.type) {
    case 'ADD':
      return [...tareas, action.task];
    case 'REMOVE':
      return tareas.filter((tarea, index) => index !== action.index);
    case 'REMOVEALL':
      return (tareas = []); // Esto vacía el array
    default:
      return tareas;
  }
};

const temaReducer = (temaActual, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return temaActual === 'claro' ? 'oscuro' : 'claro';
    default:
      return temaActual;
  }
};

const UseReducer = () => {
  const [state, dispatchContador] = useReducer(contadorReducer, inicial);
  const [valor, setValor] = useState(0);

  const [tareas, dispatchTarea] = useReducer(tareasReducer, []);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const [tema, dispatch] = useReducer(temaReducer, 'claro');

  const agregarTarea = () => {
    if (nuevaTarea !== '') {
      dispatchTarea({ type: 'ADD', task: nuevaTarea });
      setNuevaTarea('');
    }
  };

  return (
    <div>
      <h2>{text['functional-components-page-usereducer']}</h2>

      <div>
        <h3>{text['functional-components-page-usereducer-counter']}</h3>
        {state.contador}
        <input value={valor} onChange={(e) => setValor(e.target.value)} />
        <button onClick={() => dispatchContador({ type: 'incrementar' })}>
          {text['functional-components-page-usereducer-counter+']}
        </button>
        <button onClick={() => dispatchContador({ type: 'decrementar' })}>
          {text['functional-components-page-usereducer-counter-']}
        </button>
        <button onClick={() => dispatchContador({ type: 'set', payload: valor })}>
          {text['functional-components-page-usereducer-counter-set']}
        </button>
      </div>

      <div>
        <h3>{text['functional-components-page-usereducer-tasks']}</h3>
        <input type='text' value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)} />
        <button onClick={agregarTarea}>{text['functional-components-page-usereducer-tasks-add']}</button>
        <ul>
          {tareas.map((tarea, index) => (
            <>
              <li key={index}>
                {tarea} <button onClick={() => dispatchTarea({ type: 'REMOVE', index })}>🗑️</button>
              </li>
            </>
          ))}
        </ul>
        <button onClick={() => dispatchTarea({ type: 'REMOVEALL' })}>
          {text['functional-components-page-usereducer-tasks-remove']}
        </button>
      </div>

      <div className={`App ${tema}`}>
        <h3>{text['functional-components-page-usereducer-theme']}</h3>
        <h1>
          {text['functional-components-page-usereducer-theme-mode']}
          {tema}
        </h1>
        <button onClick={() => dispatch({ type: 'TOGGLE' })}>
          {text['functional-components-page-usereducer-theme-button']}
        </button>
      </div>
    </div>
  );
};

export default UseReducer;
