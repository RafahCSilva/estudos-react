import { combineReducers, createStore } from 'redux'

const reducers = combineReducers({
  numeros: function (state, action) {
    console.log('Reducer Numeros...',state, ' ', action)
    return { min: 1, max: 10 }
  },
  nomes: function (state, action) {
    console.log('Reducer Nomes...',state, ' ', action)
    return [ 'Ana', 'Bia', 'Carlos' ]
  },
})

export default function storeConfig () {
  return createStore(reducers)
}
