import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

export default function LinkAnidado() {
  return (
    <div style={{ backgroundColor: 'aquamarine', width: '50%' }}>
      <h3>Componente de Link Anidado</h3>

      <ul>
        <li>
          <Link to='/anidado/link-1'>Link 1</Link>
        </li>
      </ul>

      <div>
        <Routes>
          <Route path='/anidado/link-1' element={<h3>Link 1</h3>} />
        </Routes>
      
      </div>
    </div>
  );
}
