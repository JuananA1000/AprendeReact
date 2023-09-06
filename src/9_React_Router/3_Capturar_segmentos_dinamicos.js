import { Route, Routes, Link, useParams } from 'react-router-dom';
import text from '../translations/es/global.json';

/**
  Para capturar los elementos variables de una url, debemos de explicar los SEGMENTOS DINÁMICOS. En este ejemplo,
  utilizaremos los nombres de los tacos para acceder a su info y saber sus ingredientes, accediendo a su nombre con la
  ruta dinámica /tacos/:nombre. Para ello utilizaremos el hook useParams()
*/

function Home() {
  return (
    <div>
      <h3 style={{ backgroundColor: 'aquamarine' }}>{text['react-router-page-dynsegments-home-component']}</h3>
    </div>
  );
}

function SearchPage() {
  const tacos = ['Cochinita Pibil', 'Tinga de Pollo', 'Pastor'];

  return (
    <div>
      <h3 style={{ backgroundColor: 'aqua' }}>{text['react-router-page-dynsegments-searchpage-component']}</h3>
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
  // Este es el nombre de la variable en el componente último componente <Route> que hemos creado
  const { nombreTaco } = useParams();
  return (
    <div>
      <h3>{text['react-router-page-dynsegments-tacos-component']}</h3>
      {nombreTaco}
    </div>
  );
}

export default function CapturarSegmentosDinamicos() {
  return (
    <div>
      <h2>{text['react-router-page-dynsegments']} </h2>
      <nav>
        <ul>
          <li>
            <Link to='/'>{text['react-router-page-dynsegments-home']}</Link>
          </li>
          <li>
            <Link to='/search-page'>{text['react-router-page-dynsegments-searchpage']}</Link>
          </li>
        </ul>
      </nav>

      <section>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search-page' element={<SearchPage />} />
          <Route path='/tacos/:nombreTaco' element={<Tacos />} />
        </Routes>
      </section>
    </div>
  );
}
