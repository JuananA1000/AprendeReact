import { memo } from 'react';

/*
  La memoizasción es el proceso por el cual obviaremos la renderizacion de un componente una vez este ya aparezca en
  pantalla, evitando mejorando así el rendimiento de nuestra aplicación.
*/

const Li = memo(({ fullname }) => {
  console.log(`renderizando ${fullname}`);
  return <li>{fullname}</li>;
});

const MyList = ({ data }) => {
  console.log('renderizando lista');
  return (
    <ul>
      {data.map((x) => (
        <Li key={x.name + x.lastname} fullname={`${x.name} ${x.lastname}`} />
      ))}
    </ul>
  );
};

export default MyList;
