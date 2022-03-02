// Action Creator — Factory de Action

import { NUM_MAX_ALTERADO, NUM_MIN_ALTERADO } from './actionTypes'

export function alteraNumeroMinimo (novoNumero) {
  return {
    type: NUM_MIN_ALTERADO,
    payload: novoNumero,
  }
}

export function alterarNumeroMaximo (novoNumero) {
  return {
    type: NUM_MAX_ALTERADO,
    payload: novoNumero,
  }
}
