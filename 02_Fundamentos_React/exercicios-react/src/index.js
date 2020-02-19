import React from 'react';
import ReactDom from 'react-dom';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import {CompA, CompB as B} from './componentes/SegundoComponente';

const elemento = document.getElementById('root');

// Passando o texto para ReactDom
// ReactDom.render('Ola React', elemento);

// Para usar JSX, importe o 'react'
// ReactDom.render(<h1>Ola React</h1>, elemento);

// Estruturas complexas, ao inves de usar JS puro, com appendChild
// ReactDom.render(<ul>
//   <li>Pedro</li>
//   <li>Maria</li>
//   <li>Ana</li>
// </ul>, elemento);

// Armazenando numa variavel
// const jsx = <ul>
//   <li>Pedro</li>
//   <li>Maria</li>
//   <li>Ana</li>
// </ul>;
// ReactDom.render(jsx, elemento);

// Usando um Componente
ReactDom.render(
    <div>
      <PrimeiroComponente
          valor="Bom dia"
          aBcD={123}
          outro={2 ** 2}
      />
      <CompA valor="Olá eu so o A"/>
      {/*<CompB valor="B na area"/>*/}
      <B valor="B na area"/>{/* Com Alias */}
    </div>
    , elemento);
