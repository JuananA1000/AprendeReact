import React from 'react';
import text from '../translations/es/global.json';

import './Crear.css';

export default function Crear() {
  return (
    <div>
      <button className='buttonClass'>{text['create-page']}</button>
      <p onClick={() => navigator.clipboard.writeText('npm init react-app nombre-app')}>{text['create-page-subtitle']}</p>
    </div>
  );
}
