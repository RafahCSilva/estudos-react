import React from 'react';

export default (props) =>

    // Assim da ruim, tem q envolver com algo
    // <h1>H1</h1>
    // <h2>H2</h2>

    // Solução mais Usada!
    // <div>
    //   <h1>H1</h1>
    //   <h2>H2</h2>
    // </div>

    // Usa ndo o <React.Fragment>, mas vira <DIV> no navegado
    // <React.Fragment>
    //   <h1>H1</h1>
    //   <h2>H2</h2>
    // </React.Fragment>

    // Retornando como Array
    [
      <h1>H1</h1>,
      <h2>H2</h2>,
    ]

