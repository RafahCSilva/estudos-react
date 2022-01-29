import ReactDOM from 'react-dom'
import React, { Fragment } from 'react'
import './index.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import App from './App'
import Aleatorio from './components/basicos/Aleatorio'

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

// Usando Componentes
// Importa e usa como tag
//   import Primeiro from './components/basicos/Primeiro'
ReactDOM.render(
  <div>
    <Primeiro></Primeiro>
    <ComParametro
      titulo="Segundo Componente"
      subtitulo="Muito Legal!"
      aluno="Pedro"
      nota={ 9.3 }
    />
    <Fragmento/>
    <App/>
    <Aleatorio min={ 10 } max={ 60 }/>
  </div>,
  el,
)

ReactDOM.render(
  <div>
    <App/>
  </div>,
  el,
)
