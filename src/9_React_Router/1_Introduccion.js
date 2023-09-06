import { Route, Routes } from 'react-router-dom';
import text from '../translations/es/global.json';

/*
  En React Router, debemos diferenciar entre COMPONENTE y ELEMENTO.
  - Un componente es una FUNCIÓN que renderiza un elemento.
  - Un elemento es el contenido que se renderiza, es decir, el HTML. 
*/

function Home() {
  return <div>{text['react-router-page-intro-home-component']}</div>;
}
function SearchPage() {
  return <div>{text['react-router-page-intro-searchpage-component']}</div>;
}

export default function Introduccion() {
  // Antes de nada, iremos a index.js e importaremos una serie de elementos
  return (
    <div>
      <h1>{text['react-router-page-title']} </h1>
      <h2>{text['react-router-page-intro']}</h2>
      <nav>
        <ul>
          <li>
            <a href='/'>{text['react-router-page-intro-home']}</a>
          </li>
          <li>
            <a href='/search-page'>{text['react-router-page-intro-searchpage']}</a>
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
