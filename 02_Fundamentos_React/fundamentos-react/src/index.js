import ReactDOM from 'react-dom'
import React from 'react'

let el = document.querySelector('#root')

// injetando uma string na div
ReactDOM.render(
  'Olá React',
  el,
)

// Para usar a syntax JSX tem q importar o React
ReactDOM.render(
  <div>Olá React</div>,
  el,
)

// interpolation variáveis/expressões
const tag = <div>Olá React</div>
ReactDOM.render(
  <div>
    { tag }
    { 1 + 2 }
  </div>,
  el,
)
