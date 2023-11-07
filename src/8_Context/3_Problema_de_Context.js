import { createContext, useContext, useState, memo } from 'react';
import text from '../translations/es/global.json';

/**
 * Context es una librería que suele utilizarse pora datos que NO CAMBIEN CONSTANTEMENTE, como nuestro contador, o en
 * aplicaciones pequeñas y con pocos datos ya que NO SE PUEDE MEMOIZAR para que su rendimiento mejore,
 * Una buena idea para utilizar context sería utilizarlo en sesiones de usuario, variables de idioma, etc.
 */

const Contexto = createContext();

const ContadorProvider = ({ children }) => {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);

  return <Contexto.Provider value={{ contador, incrementar, decrementar }}>{children}</Contexto.Provider>;
};

const Incrementar = () => {
  console.log('INCREMENTAR');
  const { incrementar } = useContext(Contexto);

  return (
    <div>
      <button onClick={incrementar}>{text['context-page-contextproblem-increase-button']}</button>
    </div>
  );
};

const Decrementar = () => {
  console.log('DECREMENTAR');
  const { decrementar } = useContext(Contexto);

  return (
    <div>
      <button onClick={decrementar}>{text['context-page-contextproblem-decrease-button']}</button>
    </div>
  );
};

const Etiqueta = () => {
  console.log('ETIQUETA');
  const { contador } = useContext(Contexto);

  return <h2>{contador}</h2>;
};

export default function ProblemaDeContext() {
  return (
    <div>
      <h2>{text['context-page-contextproblem']}</h2>

      <ContadorProvider>
        <Etiqueta />
        <Incrementar />
        <Decrementar />
      </ContadorProvider>
    </div>
  );
}
