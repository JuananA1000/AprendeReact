import { createContext, useContext } from 'react';
import text from '../translations/es/global.json';

// Podremos pasarle a createContext cualquier tipo de valor: un string, número, objeto...
const ContextoPorDefecto = createContext('Valor por defecto');
const Contexto2 = createContext('Valor por defecto 2');

// Un provider le pasa el contexto a los componentes hijos
const ProviderPorDefecto = ({ children }) => {
  return (
    // La prop 'value' es obligatoria
    <ContextoPorDefecto.Provider value={'Contexto por defecto'}>
      <div></div>
      {children}
    </ContextoPorDefecto.Provider>
  );
};

const Contenido = () => {
  const ctx = useContext(ContextoPorDefecto);
  return (
    <div style={{ color: 'green' }}>
      {text['context-page-content-component']} {ctx}
    </div>
  );
};

const Contenido2 = () => {
  const ctx = useContext(Contexto2);
  return (
    <div style={{ color: 'red' }}>
      {text['context-page-content2-component']} {ctx}
    </div>
  );
};

export default function Introduccion() {
  return (
    <div>
      <h1>{text['context-page-title']}</h1>
      <h2>{text['context-page-context-type']}</h2>
      
      <h3>{text['context-page-title-provider-value']}</h3>
      <ProviderPorDefecto>
        <Contenido />
        <Contenido2 />
      </ProviderPorDefecto>

      <h3>{text['context-page-title-non-provider-value']}</h3>
      <Contenido />
      <Contenido2 />
    </div>
  );
}
