import { useFormik } from 'formik';
import text from '../translations/es/global.json';

export default function EliminaCodigoRepe() {
  const validate = (values) => {
    const errors = {};

    if (!values.nombre) {
      errors.nombre = 'Requerido';
    } else if (values.nombre.length < 3) {
      errors.nombre = 'UNA POLLA CON OREJAS';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      nombre: '',
      apellido: '',
      email: '',
    },
    validate,
    onSubmit: (values) => console.log('Eliminar código repetitivo: ', values),
  });

  return (
    <div>
      <h2>{text['formik-page-del-rep-code']}</h2>

      <form onSubmit={formik.handleSubmit} style={{ width: '30%' }}>
        <fieldset>
          <label>{text['formik-page-del-rep-code-form-name']} </label>
          {/* 
            getFieldProps() contiene las propiedades 'name', 'value', 'onChange', y onBlur
          */}
          <input type='text' {...formik.getFieldProps('nombre')} />
          {formik.touched.nombre && formik.errors.nombre ? (
            <p style={{ color: 'red' }}>{formik.errors.nombre}</p>
          ) : null}

          <label>{text['formik-page-del-rep-code-form-lastname']} </label>
          <input type='text' {...formik.getFieldProps('apellido')} />

          <label>{text['formik-page-del-rep-code-form-email']}</label>
          <input type='email' {...formik.getFieldProps('email')} />
        </fieldset>

        <button type='submit'>{text['formik-page-del-rep-code-form-button-send']}</button>
      </form>
    </div>
  );
}
