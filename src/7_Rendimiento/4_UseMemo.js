import { useState, useCallback, useMemo } from 'react';
import MemoTitle from './components/MemoTitle';
import MemoMyForm from './components/Forms/MemoMyForm';
import ListChildren from './components/Lists/ListChildren';
import text from '../translations/es/global.json';

function App() {
  const [valores, setValores] = useState([]);

  const handleSubmit = useCallback((values) => {
    setValores((data) => [...data, values]);
  }, []);

  console.time('memo');
  const iterador = 50000000;
  const memoizar = useMemo(() => {
    let total = 0;

    for (let i = 0; i < iterador; i++) {
      total *= iterador;
    }

    return total;
  }, [iterador]);
  console.timeEnd('memo');

  return (
    <div>
      <h2>{text['performance-page-usememo']}</h2>
      {/* 
        useCallback() es un hook que 'recuarda' la función en que se aplique, y evita que esta se vuelva a ejecutar
        innecesariamente una vez hagamos submit, mejorando así el rendimiento de nuestra app.
      */}
      <MemoTitle>{text['performance-page-usememo-memotitle']}</MemoTitle>
      <MemoMyForm onSubmit={handleSubmit} />
      <ListChildren data={valores} />
    </div>
  );
}

export default App;
