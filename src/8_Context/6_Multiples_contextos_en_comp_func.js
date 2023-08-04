import { createContext, useContext } from 'react';

const Contexto1 = createContext('Primer Contexto');
const Contexto2 = createContext('Segundo Contexto');

const Provider = ({ children }) => {
  return (
    <Contexto1.Provider value='valor 1'>
      <Contexto2.Provider value='valor 2'>{children}</Contexto2.Provider>
    </Contexto1.Provider>
  );
};

const ComponenteFuncional = () => {
  // En los comnponentes funcionales utilizaremos useContext() en lugar de los consumer
  const valor1 = useContext(Contexto1);
  const valor2 = useContext(Contexto2);

  return <div>{`${valor1}${valor2}`}</div>;
};

export default function MultiplesContextosEnCompFunc() {
  return (
    <div>
      <h2>Múltiples Contextos en Componentes Funcionales</h2>

      <Provider>
        <ComponenteFuncional />
      </Provider>
    </div>
  );
}
