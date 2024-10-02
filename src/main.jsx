import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyled from './global-styled.js'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error/Error.jsx'
import Home from './routes/Home/Home.jsx'
import CadastrarProduto from './routes/CadastroProduto/CadastrarProduto.jsx'
import Produtos from './routes/Produtos/Produtos.jsx'
import Sobre from './routes/Sobre/Sobre.jsx'
import Login from './routes/Login/Login.jsx'
import CadUsuarios from './routes/CadUsuario/CadUsuario.jsx'

const router =createBrowserRouter([{
  path:'/',element:<App/>,
  errorElement:<Error/>,

  children:[
    {path:'/',element:<Home/>},
    {path:'/cadastrarProd',element:<CadastrarProduto/>},
    {path:'/produtos',element:<Produtos/>},
    {path:'/sobre',element:<Sobre/>},
    {path:'/login',element:<Login/>},
    {path:'/cadUsuarios',element:<CadUsuarios/>}
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <GlobalStyled/>
  </StrictMode>,
)