import { styled } from 'styled-components';
import text from '../translations/es/global.json';

const P = styled.p`
  font-size: 24px;
  color: red;
`;
const Contenido = styled.div`
  padding: 20px 25px;
`;
export default function Introduccion() {
  return (
    <div>
      <h1>{text['styled-components-page-title']}</h1>
      <h2>{text['styled-components-page-intro']}</h2>

      <Contenido>
        <P>{text['styled-components-page-content-p']}</P>
      </Contenido>
    </div>
  );
}
