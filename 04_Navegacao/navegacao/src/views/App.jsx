import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

export default props => (
  <div className="App">
    {/* 1. Envolver com o <ROUTER/> */ }
    <BrowserRouter>
      <Menu/>
      <Content/>
    </BrowserRouter>
  </div>
)
