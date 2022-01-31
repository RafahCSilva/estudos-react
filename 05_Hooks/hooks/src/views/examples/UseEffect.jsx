import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial (num) {
  const n = parseInt(num)
  if (n < 0) return -1
  if (n === 0) return 1
  return calcFatorial(n - 1) * n
}

const UseEffect = (props) => {

  // Ex #01
  const [ number, setNumber ] = useState(0)
  const [ fatorial, setFatorial ] = useState(0)

  useEffect(function () {
    setFatorial(calcFatorial(number))
  }, [ number ])
  useEffect(function () {
    if (fatorial > 1000000) {
      document.title = 'Eitaaa!'
    }
  }, [ fatorial ])

  // Ex #02
  const [ status, setStatus ] = useState('Ímpar')
  useEffect(function () {
    setStatus(number % 2 === 0 ? 'Par' : 'Ímpar')
  }, [ number ])

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <SectionTitle title={ 'Exercicio #01' }/>
      <div className="center">
        <span className="text">Fatorial:</span>
        <span className="text red">
          { fatorial < 0 ? 'Não Existe' : fatorial }
        </span>
        <input
          type="number" className="input"
          value={ number }
          onChange={ (event) => setNumber(event.target.value) }
        />
      </div>
      <SectionTitle title={ 'Exercicio #02' }/>
      <div className="center">
        <span className="text">Status:</span>
        <span className="text red">{ status }</span>
      </div>
    </div>
  )
}

export default UseEffect
