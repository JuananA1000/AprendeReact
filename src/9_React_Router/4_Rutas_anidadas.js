import { Route, Routes, Link, useParams, Outlet } from 'react-router-dom';
import text from '../translations/es/global.json';

/**
  TUTORIAL: https://youtu.be/iPNt12IdbCU?t=2417
*/

function Home() {
  return (
    <div>
      <h3 style={{ backgroundColor: 'aquamarine' }}>{text['react-router-page-nested-paths-home-component']}</h3>
    </div>
  );
}
function SearchPage() {
  const tacos = ['Cochinita Pibil', 'Tinga de Pollo', 'Pastor'];

  return (
    <div>
      <h3 style={{ backgroundColor: 'aqua' }}>{text['react-router-page-nested-paths-searchpage-component']}</h3>
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
      <h3>{text['react-router-page-nested-paths-tacos-component']}</h3>
      {nombreTaco}
      <Link to='detalle-taco'>{text['react-router-page-nested-paths-tacos-component-link']}</Link>
      <Outlet /> {/* Este componente indica dónde renderizamos los componentes anidados */}
    </div>
  );
}

function DetalleTaco() {
  const { nombreTaco } = useParams();

  return (
    <div>
      <h2>
        {text['react-router-page-nested-paths-tacosdetail-component']}
        {nombreTaco}
      </h2>
    </div>
  );
}

export default function RutasAnidadas() {
  return (
    <div>
      <h2>{text['react-router-page-nested-paths']} </h2>
      <nav>
        <ul>
          <li>
            <Link to='/'>{text['react-router-page-nested-paths-home']}</Link>
          </li>
          <li>
            <Link to='/search-page'>{text['react-router-page-nested-paths-searchpage']}</Link>
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
          {/*
            Aquí mostramos el ERROR 404. Pero ¡OJO!, no es un error del servidor, puesto que, si accedemos a network
            la respuesta que nos lanza es un 200. Llamamos a este error SOFT NOT FOUND.
          */}
          <Route path='*' element={<h2>{text['react-router-page-nested-paths-not-found-component']} </h2>} />
        </Routes>
      </section>
    </div>
  );
}
