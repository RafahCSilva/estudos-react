import './Intervalo.css'
import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'
import * as storeActionsNumeros from '../store/actions/numeros'
import { NUM_MIN_ALTERADO } from '../store/actions/numeros'

function Intervalo (props) {
  console.log('Intervalo:', props)
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

// ActionCreator -> action
function mapDispatchToProps (dispatch) {
  return {
    alterarMinimo (novoNumero) {
      dispatch(storeActionsNumeros.alteraNumeroMinimo(novoNumero))
      // dispatch({ type: 'NUM_MIN_ALTERADO', payload: novoNumero })
    },
    alterarMaximo (novoNumero) {
      dispatch(storeActionsNumeros.alterarNumeroMaximo(novoNumero))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Intervalo)
