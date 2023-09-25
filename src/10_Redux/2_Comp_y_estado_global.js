import text from '../translations/es/global.json';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addUser } from './store/userSlice';
import Header from './components/Header';
import Email from './components/Email';

export default function CompYEstadoGlobal() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/8')
      .then((respuesta) => respuesta.json())
      .then((data) => dispatch(addUser(data)))
      .catch((error) => console.log('ERROR: ', error));
  }, []);

  return (
    <div>
      <h2>
        {text['redux-page-globalstate']}
      </h2>

      <h3>{text['redux-page-globalstate-dispatch-actions']}</h3>
      <Header />
      <h3>{text['redux-page-globalstate-dispatch-events']}</h3>
      <Email />
    </div>
  );
}
