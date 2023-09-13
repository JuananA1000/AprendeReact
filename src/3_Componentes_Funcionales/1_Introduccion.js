import text from '../translations/es/global.json';

const MiComponente = ({ unaProp, otraProp }) => {
  return (
    <div>
      <h2>{text['functional-components-page-intro']}</h2>
      <p>{text['functional-components-page-intro-phrase']}</p>
      {text['functional-components-page-intro-greetings1']} {unaProp}
      <br />
      {text['functional-components-page-intro-greetings2']} {otraProp}
    </div>
  );
};

export default function Introduccion() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{text['functional-components-page-title']}</h1>

      <MiComponente
        // Podemos NO mostrar estas props si no nos interesa, o mostrar solo una de ellas
        unaProp={'Hola Mundo '}
        otraProp={'Adiós Mundo'}
      />
    </div>
  );
}
