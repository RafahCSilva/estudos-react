import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function merge (s1, s2) {
  return Array(Math.max(s1.length, s2.length))
    .fill(0)
    .map((v, k) => `${ s1[k] || '' }${ s2[k] || '' }`)
    .join('')
}

console.log(merge('casa', '1234'))

const UseRef = (props) => {

  // Ex 1
  const [ value1, setValue1 ] = useState('')
  const [ value2, setValue2 ] = useState('')
  const count = useRef(0)
  const count2 = useRef(0)

  // conta cada render
  count.current++
  // conta qdo value mudar
  useEffect(function () {
    count2.current++
  }, [ value1, value2 ])

  // Ex 2
  const myInput1 = useRef(null)
  const myInput2 = useRef(null)
  // focus alternado apos digitar
  useEffect(function () {
    myInput1.current.focus()
  }, [ value2 ])
  useEffect(function () {
    myInput2.current.focus()
  }, [ value1 ])

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"/>

      <SectionTitle title={ 'Exercicio #01' }/>
      <div className="center">
        <div>
          <span className="text">Valor:</span>
          <span className="text">{ value1 }
            [<span className="text red">{ count.current }</span>]
            [<span className="text red">{ count2.current }</span>]
          </span>
        </div>
        <input type="text" className="input"
               ref={ myInput1 }
               value={ value1 } onChange={ (e) => setValue1(e.target.value) }/>
      </div>

      <SectionTitle title={ 'Exercicio #02' }/>
      <input type="text" className="input"
             ref={ myInput2 }
             value={ value2 } onChange={ (e) => setValue2(e.target.value) }/>
      <span className="text">{ merge(value1, value2) }</span>
    </div>
  )
}

export default UseRef
