import './TabelaProdutos.css'
import React from 'react'
import produtos from '../../data/produtos'

export default (props) => {

  const getLinhas = () => produtos
    .map((produto, i) => {
      return (
        <tr key={ produto.id }
            className={ i % 2 === 0 ? 'Par' : 'Impar' }>
          <td style={ { textAlign: 'center' } }>{ produto.id }</td>
          <td style={ { textAlign: 'left' } }>{ produto.nome }</td>
          <td style={ { textAlign: 'right' } }>
            R$ { produto.preco.toFixed(2).replace('.', ',') }
          </td>
        </tr>
      )
    })

  return (
    <div className="TabelaProdutos">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {/* call function para injetar um subelemento */ }
          { getLinhas() }
        </tbody>
      </table>
    </div>
  )
};
