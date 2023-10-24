import { useRef } from 'react';
import text from '../translations/es/global.json';

export default function CompNoControlados() {
  const input = useRef();
  const file = useRef();

  const submit = (e) => {
    e.preventDefault();
    console.log('INPUT: ', input.current.value); // Muestra el contenido del input
    console.log('FILE: ', file.current.files[0]);

    /*
      No es necesario crear el formulario con FormData para que funcione.
    */
    const form = new FormData();
    form.append('campo', input.current.value);
    form.append('archivo', file.current.files[0]);

    // Enviaremos el formulario a un endpoint de ejemplo. Este NO EXISTE, por lo que nos saltará un ERROR 404 NOT FOUND 
    fetch('/endpointEjemplo', { method: 'POST', body: form }); 
    /*
      En este punto, para comprobar las peticiones al servidor que haga nuestro metodo fetch(), nos dirigiremos a la
      pestaña Network de la consola del navegador.
    */
  };

  return (
    <div>
      <div>
        <h2>{text['form-page-uncontrolled-components']}</h2>
      </div>

      <form onSubmit={submit}>
        <input type='text' name='campo' ref={input} placeholder='Escribe...'/>
        <input type='file' name='archivo' ref={file} />
        <input type='submit' value={text['form-page-uncontrolled-components-send']} />
      </form>
    </div>
  );
}
