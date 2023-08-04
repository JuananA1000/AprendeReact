import { useField } from 'formik';

export default function TextInput({ label, ...props }) {
  const [field, meta] = useField(props);

  console.log('Field y meta:', { field, meta });
  return (
    <div>
      <label>{label}</label>
      <input {...field} />
      {meta.touched && meta.error ? <p style={{ color: 'red' }}>{meta.error}</p> : null}
    </div>
  );
}
