import { memo } from 'react';
import { isEqual } from 'lodash';
/**
 * Para comparar instancias, además de manipular y transformar datos, instalaremos lodash con: npm i -S lodash
 */
const Li = memo(({ children }) => {
  console.log(`renderizando li ${children}`);
  return <li>{children}</li>;
}, isEqual);

const ListChildren = ({ data }) => {
  console.log('renderizando lista children');
  return (
    <ul>
      {data.map((x) => (
        <Li key={x.name + x.lastname}>
          {x.name} {x.lastname}
        </Li>
      ))}
    </ul>
  );
};

// Podemos colocar el metodo memo() en la propia funcion o tambien al exportar:
export default memo(ListChildren);
