import text from '../translations/es/global.json';
import { H1t4 } from '../components/Headers/Headers';

import './style.css'

export default function Introduccion() {
  const submit = (e) => {
    e.preventDefault();
    console.log('E: ', e.target.value);
  };

  return (
    <div>
      <H1t4 />

      <h2>{text['form-page-intro']}</h2>
      <form onSubmit={submit}>
        <input name='Campo1' />
        <input name='Campo2' />
        <input type='submit' value={text['form-page-button-send']} />
      </form>
    </div>
  );
}
