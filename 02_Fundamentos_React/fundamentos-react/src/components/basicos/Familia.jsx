import React, { cloneElement } from 'react'

export default (props) => (
  <div>
    {/* repassando props do Pai para o filho com spread */ }
    {/*<FamiliaMembro nome="Ana" { ...props }/>*/ }
    { props.children.map((child, i) => {
      return cloneElement(child, { ...props, key: i })
    }) }
  </div>
);


