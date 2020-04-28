import React, {Component} from 'react';

export default class ComponentClasse extends Component {
  render() {
    return (
      <div>
        <h1>Olá Classe!</h1>
        <h2>{this.props.valor || 'Padrão'}</h2>
      </div>
    );
  }
}
