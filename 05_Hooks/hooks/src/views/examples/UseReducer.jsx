import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
  cart: [],
  user: null,
  number: 0,
}

function reducer (state, action) {
  switch (action.type) {
    case 'number_add2':
      return { ...state, number: state.number + 2 }
    case 'login':
      return { ...state, user: { name: action.payload.name } }

    // EX
    case 'number_multi7':
      return { ...state, number: state.number * 7 }
    case 'number_div25':
      return { ...state, number: state.number / 25 }
    case 'number_round':
      return { ...state, number: Math.round(state.number) }
    case 'number_addN':
      return { ...state, number: state.number + (action.payload.number || 0) }
    default:
      return state
  }
}

const UseReducer = (props) => {
  const [ state, dispatch ] = useReducer(reducer, initialState, undefined)

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        <span className="text">{ state.number }</span>
        { state.user
          ? <span className="text">{ state.user.name }</span>
          : <span className="text">Sem usuário</span>
        }
        <div>
          {/*@formatter:off*/}
          <button className="btn" onClick={ () => dispatch({ type: 'number_add2' }) }>+2</button>
          <button className="btn" onClick={ () => dispatch({ type: 'login', payload: { name:'rafa' } }) }>Login</button>
          {/*@formatter:on*/ }
        </div>
        <div>
          {/*@formatter:off*/}
          <button className="btn" onClick={ () => dispatch({ type: 'number_multi7' }) }>&times;7</button>
          <button className="btn" onClick={ () => dispatch({ type: 'number_div25' }) }>&divide;25</button>
          <button className="btn" onClick={ () => dispatch({ type: 'number_round' }) }>round</button>
          <button className="btn" onClick={ () => dispatch({ type: 'number_addN', payload:{number:11} }) }>+N(11)</button>
          {/*@formatter:on*/ }
        </div>
      </div>
    </div>
  )
}

export default UseReducer
