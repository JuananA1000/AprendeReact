import { useState } from 'react'
import Title from './components/Title'
import MyForm from './components/Forms/MyForm'
import ListChildren from './components/Lists/ListChildren'
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
