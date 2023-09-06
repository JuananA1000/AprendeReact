import { Route, Routes, Link, useParams, Outlet, Navigate, useNavigate } from 'react-router-dom';

import text from '../translations/es/global.json';
import { useAuth } from './useAuth';

function Home() {
  return (
    <div>
      <h3 style={{ backgroundColor: 'aquamarine' }}>{text['react-router-page-useauth-home-component']}</h3>
    </div>
  );
}
function SearchPage() {
  const tacos = ['Cochinita Pibil', 'Tinga de Pollo', 'Pastor'];

  return (
    <div>
      <h3 style={{ backgroundColor: 'aqua' }}>{text['react-router-page-useauth-searchpage-component']}</h3>
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
      <h3>{text['react-router-page-useauth-tacos-component']}</h3>
      {nombreTaco}
      <Link to='detalle-taco'>{text['react-router-page-useauth-tacos-component-link']}</Link>
      <Outlet />
    </div>
  );
}

const Login = () => {
  const login = useAuth();
  // const navigate = useNavigate(); DUDA: ¿Cómo se utiliza useNavigate()?

  const handleClick = () => {
    if (login) {
      return <Navigate to='/search-page' />;
    }
    // navigate('/search-page');
  };

  return (
    <div>
      <h3 style={{ backgroundColor: 'grey' }}>{text['react-router-page-useauth-login-component']}</h3>
      <button onClick={handleClick}>{text['react-router-page-useauth-login-component-button']}</button>
    </div>
  );
};

function DetalleTaco() {
  const { nombreTaco } = useParams();

  return (
    <div>
      <h2>
        {text['react-router-page-useauth-tacosdetail-component']}
        {nombreTaco}
      </h2>
    </div>
  );
}

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuth();
  if (!isAuthenticated) {
    return <Navigate to='/login' />;
  }
  return children;
};

export default function UseAuth() {
  return (
    <div>
      <h2>{text['react-router-page-useauth']} </h2>
      <nav>
        <ul>
          <li>
            <Link to='/'>{text['react-router-page-useauth-home']}</Link>
          </li>
          <li>
            <Link to='/search-page'>{text['react-router-page-useauth-searchpage']}</Link>
          </li>
        </ul>
      </nav>

      <section>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/search-page'
            element={
              <ProtectedRoute>
                <SearchPage />
              </ProtectedRoute>
            }
          />
          <Route path='/tacos/:nombreTaco' element={<Tacos />}>
            <Route path='detalle-taco' element={<DetalleTaco />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<h2>{text['react-router-page-useauth-not-found-component']} </h2>} />
        </Routes>
      </section>
    </div>
  );
}
