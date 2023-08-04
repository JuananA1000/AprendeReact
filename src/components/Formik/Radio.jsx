import { useField } from 'formik';

export default function Radio({ label, ...props }) {
  //  aquí no nos interesa obtener 'meta'
  const [field] = useField({ ...props, type: 'radio' });

  return (
    <div>
      <label>
        <input type='radio' {...field} {...props} />
        {label}
      </label>
    </div>
  );
}
