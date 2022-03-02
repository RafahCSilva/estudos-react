import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

function Sorteio (props) {
  console.log(props)
  const { min, max } = props
  const aleatorio = Math.floor(Math.random() * (max - min) + min)
  return (
    <Card title="Sorteio de um Números" purple>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{ aleatorio }</strong>
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

export default connect(mapStateToProps)(Sorteio)
