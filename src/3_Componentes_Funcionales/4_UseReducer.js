
import { useReducer, useState } from 'react';
import text from '../translations/es/global.json';

/**
 * action es un objeto que siempre contendrá una propiedad 'type' que sera siempre un string, y otra 'payload' que
 * puede contgener cualquier valor
 */
const inicial = { contador: 0 };

const reducer = (state, action) => {
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

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, inicial);
  const [valor, setValor] = useState(0);
  return (
    <div>
      <h2>{text['functional-components-page-usereducer']}</h2>
      {text['functional-components-page-usereducer-counter']} {state.contador}
      <input value={valor} onChange={(e) => setValor(e.target.value)} />
      <button onClick={() => dispatch({ type: 'incrementar' })}>
      {text['functional-components-page-usereducer-counter+']}
      </button>
      <button onClick={() => dispatch({ type: 'decrementar' })}> {text['functional-components-page-usereducer-counter-']}</button>
      <button onClick={() => dispatch({ type: 'set', payload: valor })}> {text['functional-components-page-usereducer-counter-set']}</button>
    </div>
  );
};

export default UseReducer;
