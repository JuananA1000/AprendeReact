import { H1t2 } from '../components/Headers/Headers';
import { Component } from 'react';

export class Introduccion extends Component {
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
        <H1t2 />

        <div style={{ cursor: 'pointer' }} onClick={this.toggleImage}>
       
       
        </div>
        {this.state.showImage && (
          <img src={require('../images/t2/Diseño sin título.png')} alt='Componente Hola Mundo' />
        )}
      </div>
    );
  }
}

export default Introduccion;
