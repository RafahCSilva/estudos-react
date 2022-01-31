import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UseCallbackButtons'

const UseCallback = (props) => {
  const [ count, setCount ] = useState(0)

  // function inc (delta) {setCount(count + delta)}

  const inc = useCallback(function (delta) {
    setCount(current => current + delta)
  }, [ setCount ])
  // usando setCount como dependence,
  // pq ele só é criado uma vez
  // entao não mudará INC e nao o triggará a props no componente q foi memoriazado

  return (
    <div className="UseCallback">
      <PageTitle
        title="Hook UseCallback"
        subtitle="Retorna uma função memoizada!"
      />
      <div className="center">
        <span className="text">{ count }</span>
        <UseCallbackButtons inc={ inc }/>
      </div>
    </div>
  )
}

export default UseCallback
