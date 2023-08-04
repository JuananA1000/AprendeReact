import { styled } from 'styled-components';
import text from '../translations/es/global.json';

const Boton = styled.button`
  background-color: ${(props) => (props.primary ? 'red' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'red')};
  padding: 10px 15px;
  border: solid 2px red;
  border-radius: 4px;

  /* Esto hace que la sombra aparezca con una pequeña animación */
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: 1px 2px 5px rgb(0, 0, 0, 0.3);
  }
`;

const BotonBloque = styled(Boton)`
  width: 100%;
  font-size: 24px;
`;

const Link = ({ className, ...props }) => {
  return <a className={className} {...props}></a>;
};
const LinkConEstilo = styled(Link)`
  color: blue;
`;
export default function ExtendiendoEstilos() {
  return (
    <div>
      <h2>{text['styled-components-page-extend-styles']} </h2>
      <BotonBloque>{text['styled-components-page-extend-styles-block-button']} </BotonBloque>
      <br />
      <br />
      <BotonBloque primary>
        {text['styled-components-page-extend-styles-block-button-primary']}Boton de bloque con prop primary
      </BotonBloque>

      <h3>{text['styled-components-page-extend-styles-change-tag']} </h3>
      <BotonBloque primary as='a' href='#'>
        {text['styled-components-page-extend-styles-link-button']}
      </BotonBloque>

      <h3>{text['styled-components-page-extend-styles-any-comp']} </h3>
      <Link>{text['styled-components-page-extend-styles-link']}</Link>
      <LinkConEstilo>{text['styled-components-page-extend-styles-styled-link']} </LinkConEstilo>
    </div>
  );
}
