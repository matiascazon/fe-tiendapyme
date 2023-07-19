import React, { useContext } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout'
import Index, { loader as loaderProductos } from './pages/Index'
import Login from './pages/Login'
import ProductoDetallePage from './pages/ProductoDetallePage'
import NotFound from './pages/NotFound'
import {loader as loaderProducto} from './pages/ProductoDetallePage'
import Wishlist from './pages/Wishlist'
import Registro from './pages/Registro'
import ProtectedRoute from './Componentes/protectedRoute/protectedRoute'
import GuestRoute from './Componentes/protectedRoute/GuestRoute'





const App = () => {
    // const {isAuthenticated,user} = useContext(AuthContext)
    // console.log(isAuthenticated)
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
              element: (
                <GuestRoute>
                    <Login/>
                </GuestRoute>
                )
            },
            {
              path: "/registro",
              element: (
                <GuestRoute>
                    <Registro/>
                </GuestRoute>
                )
            },
            {
              path: "/productos/:productoId",
              element: <ProductoDetallePage/>,
              loader: loaderProducto,
            },
            {
              path: "*",
              element: <NotFound/>
            },
            {
              path: "/deseados",
              element: (
                <ProtectedRoute> 
                  <Wishlist/> 
                </ProtectedRoute>
                ) 
            }
      
          ]
        }
    ])
  return (
    // <AuthProvider>
    //   <CarritoProvider>
        <RouterProvider
          router={router}
        ></RouterProvider>
    //   </CarritoProvider>    
    // </AuthProvider>
  )
}

export default App
