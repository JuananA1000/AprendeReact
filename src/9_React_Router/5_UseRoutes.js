import { Link, NavLink, useRoutes } from 'react-router-dom';
import text from '../translations/es/global.json';
import './4.1_Links_activos.css';

/*
  El enrutamiento utilizando el hook useRoutes() es similar a los anteriores ejercicios de enrutamiento que hemos hecho
  con alguna sutileza. 
  TUTORIAL:  https://youtu.be/iPNt12IdbCU?t=4583
  PENDIENTE: Montar rutas anidadas con useRoutes
*/

const routes = [
  { path: '/', element: <Home /> },
  { path: '/search-page', element: <SearchPage /> },
];

function Home() {
  return (
    <div>
      <h3 style={{ backgroundColor: 'aquamarine' }}>{text['react-router-page-useroutes-home-component']}</h3>
    </div>
  );
}

function SearchPage() {
  const tacos = ['Cochinita Pibil', 'Tinga de Pollo', 'Pastor'];

  return (
    <div>
      <h3 style={{ backgroundColor: 'aqua' }}>{text['react-router-page-useroutes-searchpage-component']}</h3>
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

// function Tacos() {
//   const { nombreTaco } = useParams();
//   return (
//     <div>
//       <h2>Tacos</h2>
//       {nombreTaco}
//       <Link to='detalle-taco'>Ingredientes</Link>
//       <Outlet />
//     </div>
//   );
// }

// function DetalleTaco() {
//   const { nombreTaco } = useParams();

//   return (
//     <div>
//       <h2>detalle de {nombreTaco}</h2>
//     </div>
//   );
// }

export default function UseRoutes() {
  const elemento = useRoutes(routes);

  return (
    <div>
      <h2> {text['react-router-page-useroutes']}</h2>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>{text['react-router-page-useroutes-home']}</NavLink>
          </li>
          <li>
            <NavLink to='/search-page'>{text['react-router-page-useroutes-searchpage']}</NavLink>
          </li>
        </ul>
      </nav>

      <section>{elemento}</section>
    </div>
  );
}
