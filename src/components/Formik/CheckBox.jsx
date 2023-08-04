import { useField } from 'formik';

// children es una oalabra reservada que permite agregarle contenido a un componente plantilla en forma de  HIJOS
export default function CheckBox({ children, ...props }) {
  const [field, meta] = useField({ ...props, type: 'checkbox' });

  return (
    <div>
      <label>
        <input type='checkbox' {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? <p style={{ color: 'red' }}>{meta.error}</p> : null}
    </div>
  );
}
