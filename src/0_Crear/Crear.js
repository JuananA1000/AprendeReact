import { Link } from 'react-router-dom';
import text from '../translations/es/global.json';

import './Crear.css';

export default function Crear() {
  return (
    <div>
      <Link to='/tema1'>
        <button className='buttonClass'>{text['create-page']}</button>
      </Link>
      {/* 
          COPIAR EL COMANDO: navigator.clipboard.writeText('npm init react-app nombre-app')}>
        */}
    </div>
  );
}
