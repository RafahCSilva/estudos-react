import { useState } from 'react'
import Layout from '../componentes/Layout'

export default function Integracao () {
  const [ cliente, setCliente ] = useState({})
  const [ codigo, setCodigo ] = useState(0)

  // function obterCliente () {
  //   fetch(`http://localhost:3000/api/clientes/${ codigo }`)
  //     .then(resp => resp.json())
  //     .then(dados => setCliente(dados))
  // }
  async function obterCliente () {
    const resp = await fetch(`http://localhost:3000/api/clientes/${ codigo }`)
    const dados = await resp.then(resp => resp.json())
    setCliente(dados)
  }

  return (
    <Layout>
      <div>
        <input type="number" value={ codigo }
               onChange={ (event) => setCodigo(event.target.value) } />
        <button onClick={ obterCliente }>Obter Client</button>
      </div>
      <ul>
        <li>Código: { cliente.id }</li>
        <li>Nome: { cliente.nome }</li>
        <li>E-mail: { cliente.email }</li>
      </ul>
    </Layout>
  )
}
