import { H1t14 } from '../components/Headers';
import text from '../translations/es/global.json';

/* 
  Los JSON Web Tokens son objetos JSON que permiten a un usuario identificarse en una web y acceder a ciertas rutas
  que, de lo contrario, le estarían denegadas. 

  Código Mentor: Tutorial Básico
  TUTORIAL: https://www.youtube.com/watch?v=cL3bXzUBFUA

  Instalamos, en primer lugar express y JWT:
  npm install react-jwt
  npm install jsonwebtoken
*/

export default function Introduccion() {
  return (
    <div>
      <H1t14 />
      <p>{text['jwt-page-p']}</p>
      <h2>{text['jwt-page-intro']}</h2>
    </div>
  );
}
