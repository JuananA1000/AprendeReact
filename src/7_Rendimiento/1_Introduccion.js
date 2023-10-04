import { useState } from 'react';
import Title from './components/Title';
import MyForm from './components/Forms/MyForm';
import MyList from './components/Lists/MyList';
import text from '../translations/es/global.json';

export default function Introduccion() {
  const [valores, setValores] = useState([]);
  const handleSubmit = (values) => {
    setValores([...valores, values]);
  };

  return (
    <div>
      <h1> {text['performance-page-title']}</h1>
      <Title>{text['performance-page-title-my-title']}</Title>
      <MyForm onSubmit={handleSubmit} />
      <MyList data={valores} />
    </div>
  );
}
