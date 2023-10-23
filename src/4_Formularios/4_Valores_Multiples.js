import { useState } from 'react';
import text from '../translations/es/global.json';

export default function ValoresMultiples() {
  /*
    Podemos estavblecer multiples valores utilizando un useState() por cada uno de ellos, o de la manera que
    utilizaremos ahora:
  */

  // Podemos asignar valores por defecto
  const [valores, setValores] = useState({ normal: '', texto: '', select: '', check: false, estado: '' });

  const cambiarValor = (e) => {
    // setValores({
    //   ...valores,
    //   [e.target.name]: e.target.value,
    // });
    // O también:

    setValores((state) => ({
      ...state,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    }));
  };
  console.log('VALORES: ', valores);

  return (
    <div>
      <div>
        <h2>{text['form-page-controlled-components-multiple-values']}</h2>
      </div>
      <div style={{ display: 'flex' }}>
        <div>
          <h3>{text['form-page-controlled-components-text-field']}</h3>
          <input type='text' name='normal' value={valores.normal} onChange={cambiarValor} />
        </div>
        <div>
          <h3>{text['form-page-controlled-components-textarea']}</h3>
          <textarea name='texto' value={valores.texto} onChange={cambiarValor} />
        </div>

        <div>
          <h3>{text['form-page-controlled-components-select-field']}</h3>
          <select name='select' value={valores.select} onChange={cambiarValor}>
            <option value=''>{text['form-page-controlled-components-select-field-value0']}</option>
            <option value={text['form-page-controlled-components-select-field-value1']}>
              {text['form-page-controlled-components-select-field-value1']}
            </option>
            <option value={text['form-page-controlled-components-select-field-value2']}>
              {text['form-page-controlled-components-select-field-value2']}
            </option>
          </select>
        </div>

        <div>
          <h3>{text['form-page-controlled-components-checkbox-field']}</h3>
          <input type='checkbox' name='check' checked={valores.check} onChange={cambiarValor} />
        </div>

        <div>
          <h3>{text['form-page-controlled-components-radiobutton-field']}</h3>
          <label>{text['form-page-controlled-components-radiobutton-field-label']}</label>
          <input
            type='radio'
            name='estado'
            value={text['form-page-controlled-components-radiobutton-value1']}
            checked={valores.estado === text['form-page-controlled-components-radiobutton-value1']}
            onChange={cambiarValor}
          />
          {text['form-page-controlled-components-radiobutton-value1']}
          <input
            type='radio'
            name='estado'
            value={text['form-page-controlled-components-radiobutton-value2']}
            checked={valores.estado === text['form-page-controlled-components-radiobutton-value2']}
            onChange={cambiarValor}
          />
          {text['form-page-controlled-components-radiobutton-value2']}
          <input
            type='radio'
            name='estado'
            value={text['form-page-controlled-components-radiobutton-value3']}
            checked={valores.estado === text['form-page-controlled-components-radiobutton-value3']}
            onChange={cambiarValor}
          />
          {text['form-page-controlled-components-radiobutton-value3']}
        </div>
      </div>
    </div>
  );
}
