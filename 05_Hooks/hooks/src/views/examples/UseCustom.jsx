import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { useCounters } from '../../hooks/useCounters'
import SectionTitle from '../../components/layout/SectionTitle'
import { useFetch } from '../../hooks/useFetch'

const UseRef = (props) => {
  // EX 1
  const [ count, inc, dec ] = useCounters()

  // EX 2
  const url = 'http://files.cod3r.com.br/curso-react/estados.json'
  const response = useFetch(url)

  function showStates (states) {
    return states.map(
      state => <li key={ state.sigla }>[{ state.sigla }] { state.nome }</li>)
  }

  return (
    <div className="UseCustom">
      <PageTitle
        title="Seu Hook"
        subtitle="Vamos aprender como criar o nosso próprio Hook!"
      />
      <SectionTitle title="Exercício #01"/>
      <div className="center">
        <span className="text">{ count }</span>
        <div>
          {/*@formatter:off*/}
          <button className="btn" onClick={() => inc()}>inc</button>
          <button className="btn" onClick={() => dec()}>dec</button>
          {/*@formatter:on*/ }
        </div>
      </div>

      <SectionTitle title="Exercício #02"/>
      <div className="center">
        <ul>{ response.loading ? 'carregando' : showStates(response.data) }</ul>
      </div>
    </div>
  )
}

export default UseRef
