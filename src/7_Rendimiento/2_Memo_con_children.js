import { useState } from 'react'
import Title from '../components/Rendimiento/Title'
import MyForm from '../components/Rendimiento/Forms/MyForm'
import ListChildren from '../components/Rendimiento/Lists/ListChildren'
import text from '../translations/es/global.json';

function App() {
  const [valores, setValores] = useState([])
  const handleSubmit = (values) => {
    setValores([
      ...valores,
      values
    ])
  }

  return (
    <div>
      <h2>{text['performance-page-title-memo']}</h2>
      <Title>{text['performance-page-title-my-title']}</Title>
      <MyForm onSubmit={handleSubmit} />
      <ListChildren data={valores} />
    </div>
  );
}

export default App;
