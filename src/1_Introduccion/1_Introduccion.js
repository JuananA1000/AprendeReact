import text from '../translations/es/global.json';
import { H1t1 } from '../components/Headers/Headers';
import { Component } from 'react';

export default class Introduccion extends Component {
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
        <H1t1 />
        <p style={{ cursor: 'pointer' }} onClick={this.toggleImage}>
          {text['introduction-page-hello-world']}
        </p>
        {this.state.showImage && (
          <img src={require('../images/t1/1._holam-removebg-preview.png')} alt='Componente Hola Mundo' />
        )}
      </div>
    );
  }
}
