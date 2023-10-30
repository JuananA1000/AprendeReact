import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../Input';
import text from '../../../translations/es/global.json';

const MemoMyForm = ({ onSubmit }) => {
  console.log('renderizando my form memo');

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        lastname: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={Yup.object({
        name: Yup.string().required(text['performance-page-memomyform-component-required']),
        lastname: Yup.string().required(text['performance-page-memomyform-component-required']),
      })}>
      <Form>
        <Input name='name' label={text['performance-page-memomyform-component-name']} />
        <Input name='lastname' label={text['performance-page-memomyform-component-lastname']} />
        <button type='submit'>{text['performance-page-memomyform-component-send']}</button>
      </Form>
    </Formik>
  );
};

export default MemoMyForm;
