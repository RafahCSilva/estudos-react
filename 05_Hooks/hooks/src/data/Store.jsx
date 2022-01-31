import React, { useState } from 'react'

const initialState = {
  number: 1234,
  text: 'Context API + Hooks',
}
export const AppContext = React.createContext(initialState)

const Store = props => {
  const [ state, setState ] = useState(initialState)
  return (
    <AppContext.Provider value={ {
      number: state.number,
      text: state.text,
      setNumber (n) {
        setState({ ...state, number: n })
      },
      setText (t) {
        setState({ ...state, text: t })
      },
    } }>
      <div>{ props.children }</div>
    </AppContext.Provider>
  )
}
export default Store
