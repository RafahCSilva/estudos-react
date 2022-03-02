import React from 'react'
import Card from './Card'

export default function Sorteio (props) {
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
