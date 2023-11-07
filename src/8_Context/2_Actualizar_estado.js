import { createContext, useContext, useState } from 'react';
import text from '../translations/es/global.json';

const Contexto = createContext({
  valor: false,
  toggle: () => {
    // Ojo, que una funcion vacia no es una buena práctica
  },
});

const Provider = ({ children }) => {
  const [valor, setValor] = useState(false);
  const value = {
    valor,
    toggle: () => setValor(!valor),
  };
  return <Contexto.Provider value={value}>{children}</Contexto.Provider>;
};

const Componente = () => {
  const { valor, toggle } = useContext(Contexto);

  return (
    <div>
      <button onClick={toggle}>{text['context-page-updatestatus-toggle-button']}</button>
      <label>{valor.toString()}</label>
    </div>
  );
};

export default function ActualizarEstado() {
  return (
    <div>
      <h2>{text['context-page-updatestatus']}</h2>

      <Provider>
        <Componente />
      </Provider>
    </div>
  );
}
