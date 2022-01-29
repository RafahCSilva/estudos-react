import React from 'react'

export default function Fragmento (props) {
  return (
    <React.Fragment> {/* usar o <React.Fragment> para wrapper de outras tags */ }
      <> {/* ou o alias <> */}
        <h2>Fragmento</h2>
        <p>Cuidado com esse erro!</p>
      </>
    </React.Fragment>
  )
}
