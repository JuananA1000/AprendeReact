import { useField } from 'formik';

export default function Select({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div>
      <label>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? <p style={{ color: 'red' }}>{meta.error}</p> : null}
    </div>
  );
}
