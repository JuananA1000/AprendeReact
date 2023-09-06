import { Route, Routes, Link, useParams, Outlet, NavLink } from 'react-router-dom';
import text from '../translations/es/global.json';
import './4.1_Links_activos.css';

/*
  ¿Cómo sé en que ruta me encuentro? En esta unidad aprenderemos a estilar nuestros links en las barras de navegación
  para que nos muestren dónde nos encontramos 
  TUTORIAL: https://youtu.be/iPNt12IdbCU?t=3745
*/

function Home() {
  return (
    <div>
      <h3 style={{ backgroundColor: 'aquamarine' }}>{text['react-router-page-active-links-home-component']}</h3>
    </div>
  );
}

function SearchPage() {
  const tacos = ['Cochinita Pibil', 'Tinga de Pollo', 'Pastor'];

  return (
    <div>
      <h3 style={{ backgroundColor: 'aqua' }}>{text['react-router-page-active-links-searchpage-component']}</h3>
      <ul>
        {tacos.map((taco) => (
          <li>
            <Link key={taco} to={`/tacos/${taco}`}>
              {taco}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Tacos() {
  const { nombreTaco } = useParams();
  return (
    <div>
      <h2>Tacos</h2>
      {nombreTaco}
      <Link to='detalle-taco'>{text['react-router-page-active-links-tacos-component-link']}</Link>
      <Outlet />
    </div>
  );
}

function DetalleTaco() {
  const { nombreTaco } = useParams();

  return (
    <div>
      <h2>
        {text['react-router-page-active-links-tacosdetail-component']} {nombreTaco}
      </h2>
    </div>
  );
}

export default function LinksActivos() {
  return (
    <div>
      <h2>{text['react-router-page-active-links']}</h2>
      <nav>
        <ul>
          <li>
            {/*
              El componente NavLink tiene por defecto una clase 'active' que se activa cuando hacemos click en cualquier
              elemento de una barra de navegación, y se desactiva en el resto de sus elementos. Esta clase 'active', la
              podremos estilar a nuestro gusto.
            */}
            <NavLink to='/'>{text['react-router-page-active-links-home']}</NavLink>
          </li>
          <li>
            <NavLink to='/search-page'>{text['react-router-page-active-links-searchpage']}</NavLink>
          </li>
        </ul>
      </nav>

      <section>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search-page' element={<SearchPage />} />
          <Route path='/tacos/:nombreTaco' element={<Tacos />}>
            <Route path='detalle-taco' element={<DetalleTaco />} />
          </Route>
          <Route path='*' element={<h2>{text['react-router-page-active-links-not-found-component']}</h2>} />
        </Routes>
      </section>
    </div>
  );
}
