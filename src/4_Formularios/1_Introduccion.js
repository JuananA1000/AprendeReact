import text from '../translations/es/global.json';
import { H1t4 } from '../components/Headers/Headers';

import './style.css';

export default function Introduccion() {
  const submit = (e) => {
    e.preventDefault();
    const data = Array.from(new FormData(e.target));

    console.log('E: ', Object.fromEntries(data));
  };

  return (
    <div>
      <H1t4 />

      <h2>{text['form-page-intro']}</h2>
      <div style={{ display: 'flex' }}>
        <form action='/lala' method='POST'>
          <p>Formulario a endpoint '/lala' inexistente</p>
          <input name='Campo1' />
          <input name='Campo2' />
          <input type='submit' value={text['form-page-button-send']} />
        </form>

        <form onSubmit={submit}>
          <p>Formulario con submit</p>
          <input name='Campo1' />
          <input name='Campo2' />
          <input type='submit' value={text['form-page-button-send']} />
        </form>
      </div>
    </div>
  );
}
