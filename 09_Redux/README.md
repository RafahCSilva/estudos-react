# REDUX

## Conceitos Centrais

- **Action creator**
  - É uma **Função**
  - Retornar uma **Action**
  - É **Síncrona** *
- **Action**
  - É um **Objeto**
  - Possui um atributo **type**
  - Pose ter **dados** tambem
- **Reducers**
  - São **Funções Puras**
  - Cada um altera um **Atributo**
  - Evento dispara **todos**

## Anatomia da Action

````js
let obj = {
  type: 'ALGUM_EVENTO_OCORREU',
  payload: {
    /* Aqui estão os dados */
  }
}
let obj2 = {
  type: 'NUMERO_ALTERADO',
  payload: 12
}
let obj3 = {
  type: 'LSITA_DEPRODUTOS_CHEGOU',
  payload: [
    { id: 1, nome: '', preco: 12.34 },
    { id: 2, nome: '', preco: 12.34 },
    { id: 3, nome: '', preco: 12.34 },
  ]
}
let obj4 = {
  type: 'USUARIO_SAIU'
}
````

## Anatomia da Action Creator

````js
function fazerAlgo (param) {
  return {
    type: 'OBTER_PRODUTOS',
    payload: axios.get('/products')
    // Pode retornar uma promisse,
    // mas precisa usar uma middleware para resolve-la/await/
    // pois tem q ser sync
  }
}
````

## Anatomia do Estado

````js
let state1 = {
  produtos: [/* ... */ ],
  autenticacao: [/* ... */ ]
}
````

## Como Estado é Gerado?

````js
let reducers = {
  produtos: function () { },
  autenticacao: function () { }
}
let reducers2 = {
  produtos: function (estadoAnterior, acao) {
    return proximoEstado
  },
  autenticacao: function (estadoAnterior, acao) {
    return proximoEstado
  }
}
````

````js
// Estado #01
let state01 = {
  products: [ {/* ... */ } ],
  auth: {/* ... */ }
}

// Action
let action = {
  type: 'ADD_PRODUCT',
  payload: {/* ... */ }
}

// ProductReducer
export default function (state, action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
}

// Estado #01
let state02 = {
  products: [ {/* ... */ }, {/* ... */ } ],
  auth: {/* ... */ }
}
````

## Revisão Redux

1. Evento Click
2. Minha Ação
3. Action Creator
4. Estado #1
5. Action (type, payload)
6. Dispatch
7. Reducers
8. Estado #2
9. Atualiza UI

## pratica

````shell
# cria app
npx create-react-app redux-simples

# add redux
npm i redux react-redux

# add sass
npm i sass
````

