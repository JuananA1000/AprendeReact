import { Formik, Form, Field, ErrorMessage } from 'formik';
import text from '../translations/es/global.json';

export default function ComponentesFormik() {
  const validate = (values) => {
    const errors = {};

    if (!values.nombre) {
      errors.nombre = 'Requerido';
    } else if (values.nombre.length < 3) {
      errors.nombre = 'UNA POLLA CON OREJAS';
    }
    return errors;
  };

  return (
    <div>
      <h2>{text['formik-page-fff']}</h2>

      <Formik
        initialValues={{ nombre: '', apellido: '', email: '' }}
        validate={validate}
        onSubmit={(values) => {
          console.log('Componente Formik: ', values);
        }}>
        <Form style={{ width: '30%' }}>
          <fieldset>
            <label>{text['formik-page-fff-form-name']} </label>
            <Field type='text' name='nombre' />
            <ErrorMessage name='nombre' />

            <label>{text['formik-page-fff-form-lastname']} </label>
            <Field type='text' name='apellido' />
            <ErrorMessage name='apellido' />

            <label>{text['formik-page-fff-form-email']}</label>
            <Field type='email' name='email' />
            <ErrorMessage name='email' />
          </fieldset>

          <button type='submit'>{text['formik-page-fff-form-button-send']}</button>
        </Form>
      </Formik>
    </div>
  );
}
