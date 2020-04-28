import React, {Component} from 'react';

export default class Contador extends Component {

  // Ppara Bindar o this dos metodos desta Classe
  // Solucao 1: bindar no constructor
  // constructor(props) {
  //   super(props);
  //   this.maisUm = this.maisUm.bind(this)
  // }

  // Solucaco 2: o onclick ser um Arrow q executa o metodo
  // <button onClick={ () => this.maisUm() }>Inc</button>

  // Solucao 3: se o metodo for arrow, entao ele resolve o this no contexo lexico q esta foi definida
  maisUm = (event) => {
    // this.props.numero++; // TypeError: Cannot assign to read only property 'numero' of object '#<Object>'
    // this.state.numero++; // direto no state, nao ira propagar (reagir) o valor
    // this.setState({numero: this.state.numero + 1}); // usando setState com os modificados
    this.alteraNumero(1);
  };

  menosUm = (event) => {
    // this.setState({numero: this.state.numero - 1});
    this.alteraNumero(-1);
  };

  alteraNumero = (diferenca) => {
    this.setState({numero: this.state.numero + diferenca});
  };

  // Estado interno
  state = {
    numero: this.props.numeroInicial,
  };

  render() {
    return (
      <div>
        <div>Número: {this.state.numero}</div>
        <button onClick={this.maisUm}>Inc</button>
        <button onClick={this.menosUm}>Dec</button>
        <br/>
        <button onClick={() => this.alteraNumero(10)}>Inc 10</button>
        <button onClick={() => this.alteraNumero(-10)}>Dec 10</button>
      </div>
    );
  }

}
