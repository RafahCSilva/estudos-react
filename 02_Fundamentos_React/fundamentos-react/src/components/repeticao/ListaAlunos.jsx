import React from 'react'
import alunos from '../../data/alunos'

export default (props) => (
  <div>
    <ul style={ { listStyle: 'none', textAlign: 'left' } }>{
      alunos.map((aluno) => (
        <li key={ aluno.id }>
          { aluno.id }) { aluno.nome } -> { aluno.nota }
        </li>
      ))
    }</ul>
  </div>
);
