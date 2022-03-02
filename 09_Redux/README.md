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

## Terminologia

### Action

É o contrato de objeto `{ type, payload }`, na qual identifica a ação que deverá ser executado no pipeline de reducers e seu dados.

> An **action** is a plain JavaScript object that has a `type` field. **You can think of an action as an event that describes something that happened in the application.**
>
> The `type` field should be a string that gives this action a descriptive name, like `"todos/todoAdded"`. We usually write that type string like "domain/eventName", where the first part is the feature or category that this action belongs to, and the second part is the specific thing that happened.
>
> An action object can have other fields with additional information about what happened. By convention, we put that information in a field called `payload`.

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

### Action Creator

Função/factory que retorna um Action, ou seja, um objeto no formato do contato (`{ type, payload }`). Deve ser sempre sincrona.

> An **action creator** is a function that creates and returns an action object. We typically use these so we don't have to write the action object by hand every time:

````js
const addTodo = text => {
  return {
    type: 'todos/todoAdded',
    payload: text
  }
}

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

### State

Um objeto único, formando assim a árvore com todos os estados da aplicação toda.

````js
let state1 = {
  produtos: [/* ... */ ],
  autenticacao: [/* ... */ ]
}
````

### Reducer

**Reducers** é objeto com todos as funções de **reducer**.

Cada função de **Reducer** recebe como argumento o _estado anterior_ e um _Action_.

Deve-se implementar um `Switch-Case` para cada possivel `Action.type`.

No `case` desejado será _composto a nova versao do estado_ e não somente executar uma simples edição. Assim retornando um novo objeto com a _copia do original_ e _overwrite da prop desejada_. Ou seja, um estado deve ter seus props imutavel.

No `case-default` retornar o state sem alteração

> A **reducer** is a function that receives the current `state` and an `action` object, decides how to update the state if necessary, and returns the new state: `(state, action) => newState`. **You can think of a reducer as an event listener which handles events based on the received action (event) type.**
>
> Reducers must always follow some specific rules:
> - They should only calculate the new state value based on the `state` and `action` arguments
> - They are not allowed to modify the existing `state`. Instead, they must make immutable updates, by copying the existing `state` and making changes to the copied values.
> - They must not do any asynchronous logic, calculate random values, or cause other "side effects"
>
> The logic inside reducer functions typically follows the same series of steps:
>
> - Check to see if the reducer cares about this action
    >

- If so, make a copy of the state, update the copy with new values, and return it

> - Otherwise, return the existing state unchanged
    > Here's a small example of a reducer, showing the steps that each reducer should follow:

````js
const initialState = { value: 0 }

function counterReducer (state = initialState, action) {
  // Check to see if the reducer cares about this action
  if (action.type === 'counter/increment') {
    return {
      ...state, // make a copy of `state`
      value: state.value + 1 // and update the copy with the new value
    }
  }
  return state // otherwise return the existing state unchanged
}
````

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
      // ação é fazer um array concat
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
}

// Estado #02
let state02 = {
  products: [ {/* ... */ }, {/* ... */ } ],
  auth: {/* ... */ }
}
````

### Store

> The current Redux application state lives in an object called the **store**. The store is created by passing in a reducer

### Dispatch

The Redux store has a method called `dispatch`. **The only way to update the state is to call `store.dispatch()` and pass in an action object**. The store will run its reducer function and save the new state value inside.
>
> **You can think of dispatching actions as "triggering an event"** in the application. Something happened, and we want the store to know about it. Reducers act like event listeners, and when they hear an action they are interested in, they update the state in response.

We typically call action creators to dispatch the right action:

## Revisão do Ciclo do Redux

1. Estado #1 (estado inicial)
2. Render UI
3. Evento Click na UI
4. Minha Ação (ex: onClick do button)
5. Action Creator (constroi o action)
6. Action (type, payload)
7. Dispatch (dispara o pipeline de reducers)
8. Reducers
9. Estado #2 (novo estado)
10. Atualiza/Re-Render UI

![](ReduxDataFlowDiagram.gif)

## SUMMARY

> - **Redux is a library for managing global application state**
    >

- Redux is typically used with the React-Redux library for integrating Redux and React together

> - Redux Toolkit is the recommended way to write Redux logic
> - **Redux uses a "one-way data flow" app structure**
    >

- State describes the condition of the app at a point in time, and UI renders based on that state

> - When something happens in the app:
    >

- The UI dispatches an action

>     - The store runs the reducers, and the state is updated based on what occurred
>     - The store notifies the UI that the state has changed
>   - The UI re-renders based on the new state
> - **Redux uses several types of code**
    >

- _Actions_ are plain objects with a `type` field, and describe "what happened" in the app

> - _Reducers_ are functions that calculate a new state value based on previous state + an action
>   - A Redux _store_ runs the root reducer whenever an action is _dispatched_

### Three Principles

- Single source of truth
- State is read-only
- Changes are made with pure functions

## Prática

````shell
# cria app
npx create-react-app redux-simples

# add redux
npm i redux react-redux

# add sass
npm i sass
````

## Refs

- https://redux.js.org/tutorials/essentials/part-1-overview-concepts#terminology
