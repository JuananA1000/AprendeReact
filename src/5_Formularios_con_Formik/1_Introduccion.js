import { useFormik } from 'formik';
import text from '../translations/es/global.json';

// TUTORIAL: Instalamos formik con el comando 'npm install formik --save'

export default function Introduccion() {
  const formik = useFormik({
    initialValues: {
      nombre: '',
      apellido: '',
      email: '',
    },
    onSubmit: (values) => console.log('Introducción: ', values),
  });

  return (
    <div>
      <h1>{text['formik-page-title']}</h1>
      <h2>{text['formik-page-intro']}</h2>

      <form style={{ width: '30%' }} onSubmit={formik.handleSubmit}>
        <fieldset>
          <label>{text['formik-page-intro-form-name']}</label>
          <input name='nombre' type='text' onChange={formik.handleChange} value={formik.values.nombre} />
          <label>{text['formik-page-intro-form-lastname']} </label>
          <input name='apellido' type='text' onChange={formik.handleChange} value={formik.values.apellido} />
          <label>{text['formik-page-intro-form-email']}</label>
          <input name='email' type='email' onChange={formik.handleChange} value={formik.values.email} />
        </fieldset>
        <button type='submit'>{text['formik-page-intro-form-button-send']}</button>
      </form>
    </div>
  );
}
