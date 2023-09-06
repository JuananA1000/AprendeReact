import { Route, Routes, Link } from 'react-router-dom';
import text from '../translations/es/global.json';

/**
  Cada vez que hacemos click en alguno de los links que creamos en nuestro anterior ejercicio, podremos ver que el
  favicon desaparece y se recarga. para ver este efecto de una manera mas técnica, accederemos a NETWORK o RED en las
  herramientas de desarrollador (F12) y veremos que se realiza otra llamada al servidor.
  Para crear una Single Page Application, debemos evitar que todo el contenido de nuestra app se renderice cada vez que
  accedemos a un link.
*/

function Home() {
  return (
    <div>
      <h3 style={{ backgroundColor: 'aquamarine' }}>{text['react-router-page-create-spa-home-component']}</h3>
    </div>
  );
}
function SearchPage() {
  return (
    <div>
      <h3 style={{ backgroundColor: 'aqua' }}>{text['react-router-page-create-spa-searchpage-component']}</h3>
    </div>
  );
}

export default function CreandoSPA() {
  return (
    <div>
      <h2>{text['react-router-page-create-spa']}</h2>
      <nav>
        <ul>
          <li>
            <Link to='/'>{text['react-router-page-create-spa-home']}</Link>
          </li>
          <li>
            <Link to='/search-page'>{text['react-router-page-create-spa-searchpage']}</Link>
          </li>
        </ul>
      </nav>

      <section>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search-page' element={<SearchPage />} />
        </Routes>
      </section>
    </div>
  );
}
