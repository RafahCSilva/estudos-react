import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { DataContext } from '../../data/DataContext'
import SectionTitle from '../../components/layout/SectionTitle'
import { AppContext } from '../../data/Store'

const UseContext = (props) => {
  // Ex1
  const context = useContext(DataContext)

  function addNumber (n) {
    context.setState({
      ...context.state,
      number: context.state.number + n,
    })
  }

  // Ex2
  const { text, number, setNumber } = useContext(AppContext)

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />

      <SectionTitle title={ 'Exercicio #01' }/>
      <span className="text">{ context.state.text }</span>
      <span className="text">{ context.state.number }</span>
      <div>
        <button className="btn" onClick={ e => addNumber(-1) }>-1</button>
        <button className="btn" onClick={ e => addNumber(+1) }>+1</button>
      </div>

      <SectionTitle title={ 'Exercicio #02' }/>
      <div className="center">
        <span className="text">{ text }</span>
        <span className="text">{ number }</span>
        <div>
          {/*@formatter:off*/}
          <button className="btn" onClick={ e => setNumber(number - 1) }>-1</button>
          <button className="btn" onClick={ e => setNumber(number + 1) }>+1</button>
          {/*@formatter:on*/ }
        </div>
      </div>

    </div>
  )
}

export default UseContext
