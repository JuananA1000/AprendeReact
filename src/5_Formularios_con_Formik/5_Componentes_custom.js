import { Formik, Form } from 'formik';
import text from '../translations/es/global.json';

// Componentes custom
import CheckBox from './components/CheckBox';
import Radio from './components/Radio';
import Select from './components/Select';
import TextInput from './components/TextInput';

export default function ComponentesCustom() {
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
      <h2>{text['formik-page-custom-comp']} </h2>

      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <h3>{text['formik-page-custom-comp-textinput']}</h3>

          <Formik
            initialValues={{ nombre: '', apellido: '', email: '' }}
            validate={validate}
            onSubmit={(values) => {
              console.log('Componente TextInput: ', values);
            }}>
            <Form style={{ width: '30%' }}>
              <fieldset>
                <TextInput name='nombre' label={text['formik-page-custom-comp-form-name']} />
                <TextInput name='apellido' label={text['formik-page-custom-comp-form-lastname']} />
                <TextInput name='email' label={text['formik-page-custom-comp-form-email']} />
              </fieldset>
              <button type='submit'>{text['formik-page-custom-comp-textinput-send']}</button>
            </Form>
          </Formik>
        </div>

        <div>
          <h3>{text['formik-page-custom-comp-checkbox']}</h3>
          <Formik
            initialValues={{ check: false }}
            onSubmit={(values) => {
              console.log('Componente CheckBox: ', values.check);
            }}>
            <Form style={{ width: '30%' }}>
              <fieldset>
                <CheckBox name='check'>{text['formik-page-custom-comp-checkbox-accept']}</CheckBox>
              </fieldset>
              <button type='submit'>{text['formik-page-custom-comp-checkbox-send']}</button>
            </Form>
          </Formik>
        </div>

        <div>
          <h3>{text['formik-page-custom-comp-select']}</h3>
          <Formik
            initialValues={{ gorrino: '' }}
            onSubmit={(values) => {
              console.log('Componente select: ', values.gorrino);
            }}>
            <Form style={{ width: '30%' }}>
              <fieldset>
                <Select name='gorrino' label='Tipo de gorrino'>
                  <option value=''>{text['formik-page-custom-comp-select-value0']}</option>
                  <option value='value1'>{text['formik-page-custom-comp-select-value1']}</option>
                  <option value='value2'>{text['formik-page-custom-comp-select-value2']}</option>
                  <option value='value3'>{text['formik-page-custom-comp-select-value3']}</option>
                </Select>
              </fieldset>
              <button type='submit'>{text['formik-page-custom-comp-select-send']}</button>
            </Form>
          </Formik>
        </div>

        <div>
          <h3>{text['formik-page-custom-comp-radio']}</h3>
          <Formik
            initialValues={{ radio: '' }}
            onSubmit={(values) => {
              console.log('Componente radio: ', values.radio);
            }}>
            <Form style={{ width: '30%' }}>
              <fieldset>
                <Radio name='radio' value='value1' label={text['formik-page-custom-comp-radio-value1']} />
                <Radio name='radio' value='value2' label={text['formik-page-custom-comp-radio-value2']} />
                <Radio name='radio' value='value3' label={text['formik-page-custom-comp-radio-value3']} />
              </fieldset>
              <button type='submit'>{text['formik-page-custom-comp-radio-send']}</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
