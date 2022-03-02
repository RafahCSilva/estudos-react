import './Intervalo.css'
import React from 'react'

import Card from './Card'
import { connect } from 'react-redux'

function Intervalo (props) {
  const { min, max } = props

  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínino:</strong>
          <input
            type="number" value={ min }
            onChange={ e => props.alterarMinimo(+e.target.value) } />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input
            type="number" value={ max }
            onChange={ e => props.alterarMaximo(+e.target.value) } />
        </span>
      </div>
    </Card>
  )
}

function mapStateToProps (state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  }
}

export default connect(mapStateToProps)(Intervalo)
