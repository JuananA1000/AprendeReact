import { useFormik } from 'formik';
import text from '../translations/es/global.json';

export default function Validaciones() {
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
    onSubmit: (values) => console.log('Validaciones: ', values),
  });

  return (
    <div>
      <h2>{text['formik-page-validations']}</h2>

      <form onSubmit={formik.handleSubmit} style={{ width: '30%' }}>
        <fieldset>
          <label>{text['formik-page-validations-form-name']}</label>
          <input
            type='text'
            name='nombre'
            value={formik.values.nombre}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.nombre && formik.errors.nombre ? (
            <p style={{ color: 'red' }}>{formik.errors.nombre}</p>
          ) : null}

          <label>{text['formik-page-validations-form-lastname']} </label>
          <input
            type='text'
            name='apellido'
            value={formik.values.apellido}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <label>{text['formik-page-validations-form-email']} </label>
          <input
            type='email'
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </fieldset>

        <button type='submit'>{text['formik-page-validations-form-button-send']}</button>
      </form>
    </div>
  );
}
