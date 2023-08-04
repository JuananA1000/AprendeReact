import styled, { keyframes } from 'styled-components';
import text from '../translations/es/global.json';

const girar = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

const DivGiratorio = styled.div`
  animation: ${girar}2s linear infinite;
`;

export default function Animaciones() {
  return (
    <div>
      <h2>{text['styled-components-page-animations']}</h2>

      <DivGiratorio>{text['styled-components-page-animations-div']}</DivGiratorio>
    </div>
  );
}
