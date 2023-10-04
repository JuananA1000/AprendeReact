import React, { useState } from 'react';

// TUTORIAL: https://youtu.be/IathdVB65Lw?si=cNSw628Ue1lk3Ud9&t=315

// import { FaTh, FaBars, FaUserAlt, FaRegChartBar, FaCommentAlt, FaShoppingBag, FaThList } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  const menuItem = [
    {
      path: '/tema1',
      tema: 'Tema1',
      nombreTema: 'Intro',
      // icon: <FaTh />,
    },
    {
      path: '/tema2',
      tema: 'Tema2',
      nombreTema: 'Componentes con clases',
      // icon: <FaTh />,
    },
    {
      path: '/tema3',
      tema: 'Tema3',
      nombreTema: 'Comp funcionales',
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
      nombreTema: 'Conexion a APIs',
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
  ];

  return (
    <div className='container'>
      <div style={{ width: isOpen ? '200px' : '50px' }} className='sidebar'>
        <div className='top_section'>
          {/* <h1 style={{ display: isOpen ? 'block' : 'none' }} className='logo'>
            Logo
          </h1> */}
          <div style={{ marginLeft: isOpen ? '50px' : '0px' }} className='bars' onClick={toggle} >
            {/* <FaBars onClick={toggle} /> */}
            nombreTema
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className='link' activeclassName='active'>
            <div className='icon'>{item.icon}</div>
            <div style={{ display: isOpen ? 'block' : 'none' }} className='link_text'>
              {item.nombreTema}
              {/* {item.tema} */}
              
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
