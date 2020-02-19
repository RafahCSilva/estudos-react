import React from 'react';

// Componente com Funcao

// function primeiro() {
//   return <h1>Primeiro Componente!</h1>;
// }
// export default primeiro;

// ou funcao anonima
// export default function() {
//   return <h1>Primeiro Componente!</h1>;
// };

// ou com arrow function
// export default () => <div>
//   <h1>Primeiro Componente!</h1>
// </div>;

// Passando uma Props
export default (props) => <div>
  <h1>{props.valor}</h1>
  <h2>{props.aBcD}</h2>
  <h2>{props.outro}</h2>
  <p>{!!true ? 'Sim' : 'Não'}</p>
  <p>{Math.random()}</p>
</div>;
