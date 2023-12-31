import text from '../../translations/es/global.json';
import { NavLink } from 'react-router-dom';
import './SideBar.css';
import Traductor from '../Traductor/Traductor';

// TUTORIAL: https://youtu.be/IathdVB65Lw?si=cNSw628Ue1lk3Ud9&t=315

const Sidebar = ({ children }) => {
  const menuItem = [
    {
      path: '/tema1',
      tema: 'Tema1',
      nombreTema: 'Intro',
      // IDEA: A lo mejor le añado iconos con alguna librería
    },
    {
      path: '/tema2',
      tema: 'Tema2',
      nombreTema: 'Componentes con clases',
    },
    {
      path: '/tema3',
      tema: 'Tema3',
      nombreTema: 'Componentes Funcionales',
    },
    {
      path: '/tema4',
      tema: 'Tema4',
      nombreTema: 'Formularios',
    },
    {
      path: '/tema5',
      tema: 'Tema5',
      nombreTema: 'Formularios con Formik',
    },
    {
      path: '/tema6',
      tema: 'Tema6',
      nombreTema: 'Styled Components',
    },
    {
      path: '/tema7',
      tema: 'Tema7',
      nombreTema: 'Rendimiento',
    },
    {
      path: '/tema8',
      tema: 'Tema8',
      nombreTema: 'Context',
    },
    {
      path: '/tema9',
      tema: 'Tema9',
      nombreTema: 'React Router',
    },
    {
      path: '/tema10',
      tema: 'Tema10',
      nombreTema: 'Redux',
    },
    {
      path: '/tema11',
      tema: 'Tema11',
      nombreTema: 'Conexión a APIs',
    },
    {
      path: '/tema12',
      tema: 'Tema12',
      nombreTema: 'Axios',
    },
    {
      path: '/tema13',
      tema: 'Tema13',
      nombreTema: 'Zustand',
    },
    {
      path: '/tema14',
      tema: 'Tema14',
      nombreTema: 'Drag & Drop',
    },
  ];

  return (
    <div className='container'>
      <div style={{ width: '200px' }} className='sidebar'>
        <div className='top_section'>
          <div style={{ marginLeft: '50px' }} className='bars'>
            {text['sidebar-component-index']}
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className='link' activeclassName='active'>
            <div className='icon'>{item.icon}</div>
            <div style={{ display: 'block' }} className='link_text'>
              {item.nombreTema}
            </div>
          </NavLink>
        ))}
        <Traductor />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
