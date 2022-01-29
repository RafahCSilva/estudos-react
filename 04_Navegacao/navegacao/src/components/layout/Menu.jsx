import './Menu.css'
import React from 'react'

import { Link } from 'react-router-dom'

export default props => (
  <aside className="Menu">
    <nav>
      <ul>
        <li>
          { /* 4. <LINK> fará o direcionamento para a Rota */ }
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/param/123">Param #01</Link>
        </li>
        <li>
          <Link to="/param/legal">Param #02</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/naoExiste">Não Existe</Link>
        </li>
      </ul>
    </nav>
  </aside>
)
