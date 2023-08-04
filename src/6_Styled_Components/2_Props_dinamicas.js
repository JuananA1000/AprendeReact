import { styled } from 'styled-components';
import text from '../translations/es/global.json';

const Boton = styled.button`
  background-color: ${(props) => (props.primary ? 'red' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'red')};
  padding: 10px 15px;
  border: solid 2px red;
  border-radius: 4px;
`;

export default function PropsDinamicas() {
  return (
    <div>
      <h2> {text['styled-components-page-dynam-props']}  </h2>

      <Boton>{text['styled-components-page-dynam-props-button']}</Boton>
      <Boton primary> {text['styled-components-page-dynam-props-button-primary']}</Boton>
    </div>
  );
}
