# Seção 4: Navegação com React Router

````shell
create-react-app navegacao
cd navegacao
npm i react-router-dom
````

````jsx
{/* 1. Envolver com o <BrowserRouter/> */ }
<BrowserRouter>

  <main className="Content">
    {/* 2. o <ROUTES> fará as escolhas  */ }
    <Routes>
      {/* 3. o <ROUTE> define o [PATH] e o [ELEMENT]  */ }
      <Route path="/about" element={ <About/> }/>
      <Route path="/param/:id" element={ <Param/> }/>
      {/* 3.1. [exact] para rota exata, senao ele pega o inicios como prioritarios */}
      <Route exact path="/" element={ <Home/> }/>
      <Route path="*" element={ <NotFound/> }/>
    </Routes>
  </main>

  <nav>
    <ul>
      { /* 4. <LINK> fará o direcionamento para a Rota */ }
      <li><Link to="/">Início</Link></li>
      <li><Link to="/param/123">Param #01</Link></li>
    </ul>
  </nav>

</BrowserRouter>

// 5. usando um params

import { useParams } from 'react-router-dom'
export default props => {
  const { id } = useParams()
  return <div>{id}</div>
}
````
