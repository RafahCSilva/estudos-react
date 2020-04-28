import React from 'react';

const aprovados = ['Paula', 'Roberta', 'Gustavo', 'Julia'];

export default props => {

  const gerarItens = itens =>
    itens.map(item =>
      <li>{item}</li>);

  return (
    <ul>
      {gerarItens(aprovados)}
    </ul>
  )
}
