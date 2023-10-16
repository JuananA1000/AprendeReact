import text from '../translations/es/global.json';
import { Component } from 'react';

export default class EstructuraDelProyecto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showImage: false,
    };
  }

  toggleImage = () => {
    this.setState((prevState) => ({
      showImage: !prevState.showImage,
    }));
  };

  render() {
    return (
      <div>
        <h2>{text['introduction-page-structure']}</h2>
        <p style={{ cursor: 'pointer' }} onClick={this.toggleImage}>
          Ver Estructura
        </p>
        {this.state.showImage && <img src={require('../images/t1/2. estructura.png')} alt='Componente Hola Mundo' />}

        <section
          style={{
            paddingBottom: '20px',
          }}>
          <ul>
            <li>
              <b>node_modules:</b>
              contiene todas las dependencias necesarias para ejecutar nuestra aplicación React.
            </li>
            <li>
              <b>.gitignore:</b>
              contiene todos los archivos que no subiremos al repositorio, como por ejemplo variables de entorno
              locales, de pruebas, etc…
            </li>
            <li>
              <b>package-lock.json:</b>
              contiene las dependencias que instalemos, con una versión y URL concretas, para que, al desplegar nuestra
              app, asegurarnos que se instalarán las versiones de los paquetes que indiquemos.
            </li>
            <li>
              <b>package.json:</b>
              contiene más dependencias, además de los scripts que se ejecutarán cuando llamemos a npm start, npm run
              build, etc…
            </li>
          </ul>
        </section>

        <section
          style={{
            paddingBottom: '20px',
          }}>
          <ul>
            <li>
              <b>index.html:</b>
              Este es el archivo que va a contener nuestra aplicación en React para visualización del usuario.
            </li>
            <li>
              <b>favicon.ico:</b>
              Una pequeña imagen en formato png que se mostrará en la pestaña del navegador cuando despleguemos nuestra
              página.
            </li>
            <li>
              <b>manifest.json:</b>
              Contiene configuraciones de nuestra aplicación, como un nombre corto y el nombre completo, los iconos
              dentro de la carpeta, una URL inicial y otras cosas que podremos configurar.
            </li>
            <li>
              <b>robots.txt:</b>
              Permite que nuestra aplicación sea más fácil de indexar por los robots de Google o de algún otro buscador.
            </li>
          </ul>
        </section>
      </div>
    );
  }
}
