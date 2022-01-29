import * as React from 'react'

export default props => {
  return (
    <div>
      <h1>Valor Aleatório</h1>
      <p><strong>Valor Mínimo:</strong> { props.min }</p>
      <p><strong>Valor Máximo:</strong> { props.max }</p>
      <p><strong>Valor Escolhido:</strong> {
        parseInt(Math.random() * (props.max - props.min)) + props.min
      }</p>
    </div>
  )
}
