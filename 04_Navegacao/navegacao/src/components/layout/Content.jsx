import './Content.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../../views/examples/Home'
import Param from '../../views/examples/Param'
import About from '../../views/examples/About'
import NotFound from '../../views/examples/NotFound'

export default props => (
  <main className="Content">
    {/* 2. o <ROUTES> fará as escolhas  */ }
    <Routes>
      {/* 3. o <ROUTE> define o PATH e o ELEMENT  */ }
      <Route path="/about" element={ <About/> }/>
      <Route path="/param/:id" element={ <Param/> }/>
      {/* 3.1. [exact] para rota exata, senao ele pega o inicios como prioritarios */ }
      <Route exact path="/" element={ <Home/> }/>
      <Route path="*" element={ <NotFound/> }/>
    </Routes>
  </main>
)
