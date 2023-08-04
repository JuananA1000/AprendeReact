import { useState, useCallback } from 'react';
import MemoTitle from '../components/Rendimiento/MemoTitle';
import MemoMyForm from '../components/Rendimiento/Forms/MemoMyForm';
import ListChildren from '../components/Rendimiento/Lists/ListChildren';
import text from '../translations/es/global.json';

function App() {
  const [valores, setValores] = useState([]);

  const handleSubmit = useCallback((values) => {
    setValores((data) => [...data, values]);
  }, []);

  return (
    <div>
      <h2>{text['performance-page-title-usecallback']}</h2>
      {/* 
        useCallback() es un hook que 'recuarda' la función en que se aplique, y evita que esta se vuelva a ejecutar
        innecesariamente una vez hagamos submit, mejorando así el rendimiento de nuestra app.
      */}
      <MemoTitle>{text['performance-page-title-my-title']}</MemoTitle>
      <MemoMyForm onSubmit={handleSubmit} />
      <ListChildren data={valores} />
    </div>
  );
}

export default App;
