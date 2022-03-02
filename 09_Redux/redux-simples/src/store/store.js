import { combineReducers, createStore } from 'redux'
import numeros from './reducers/numeros'

// Este arquivo vai Concatenar os reducers da pasta ./reducers/...
export default function store () {
  // Creates a Redux store that holds the state tree.
  return createStore(
    // combina todos os reducers em um unico
    combineReducers({
      numeros,
      nomes: function (state, action) {
        console.log('Reducer Nomes...', state, ' ', action)
        return [ 'Ana', 'Bia', 'Carlos' ]
      },
    }),
  )
}
