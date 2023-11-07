import { createContext, useContext } from 'react';
import text from '../translations/es/global.json';
import { H1t8 } from '../components/Headers/Headers';

// Podremos pasarle a createContext cualquier tipo de valor: un string, número, objeto...
const ContextoPorDefecto = createContext('Valor por defecto');
const Contexto2 = createContext('Valor por defecto 2');

// Un provider le pasa el contexto a los componentes hijos
const ProviderPorDefecto = ({ children }) => {
  return (
    // La prop 'value' es obligatoria
    <ContextoPorDefecto.Provider value={'Contexto por defecto'}>{children}</ContextoPorDefecto.Provider>
  );
};

const Contenido = () => {
  const ctx = useContext(ContextoPorDefecto);
  return (
    <div style={{ backgroundColor: 'green' }}>
      {text['context-page-contexttype-content-component']} {ctx}
    </div>
  );
};

const Contenido2 = () => {
  const ctx = useContext(Contexto2);
  return (
    <div style={{ backgroundColor: 'red' }}>
      {text['context-page-contexttype-content2-component']} {ctx}
    </div>
  );
};

export default function Introduccion() {
  return (
    <div>
      <H1t8 />
      <h2>{text['context-page-contexttype']}</h2>

      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <h3>{text['context-page-contexttype-provider-value']}</h3>
          <ProviderPorDefecto>
            <Contenido />
            <Contenido2 />
          </ProviderPorDefecto>
        </div>

        <div>
          <h3>{text['context-page-contexttype-non-provider-value']}</h3>
          <Contenido />
          <Contenido2 />
        </div>
      </div>
    </div>
  );
}
