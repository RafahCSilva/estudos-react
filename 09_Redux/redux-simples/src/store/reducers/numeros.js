import * as actionTypes from '../actions/actionTypes'

const initialState = {
  min: 1,
  max: 10,
}

export default function NumerosReducer (state = initialState, action) {
  console.log('Reducer Numeros...', state, ' ', action)

  switch (action.type) {
    case actionTypes.NUM_MIN_ALTERADO:
      return { ...state, min: action.payload }
    case actionTypes.NUM_MAX_ALTERADO:
      return { ...state, max: action.payload }
    default:
      return state
  }
}
