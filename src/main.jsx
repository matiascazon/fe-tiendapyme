import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout'
import Index, { loader as loaderProductos } from './pages/Index'
import Login from './pages/Login'
import ProductoDetallePage from './pages/ProductoDetallePage'
import ErrorPage from './pages/ErrorPage'
import CarritoProvider from './context/contextCarrito'
import {loader as loaderProducto} from './pages/ProductoDetallePage'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Index/>,
        loader: loaderProductos,

      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/productos/:productoId",
        element: <ProductoDetallePage/>,
        loader: loaderProducto,
      },
      {
        path: "/error",
        element: <ErrorPage/>
      }


    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CarritoProvider>
      <RouterProvider
        router={router}
      ></RouterProvider>
    </CarritoProvider>    
  </React.StrictMode>,
)