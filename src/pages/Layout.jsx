import React from 'react'
import Header from '../Componentes/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Componentes/Footer'


const Layout = () => {
  return (
    <div>
        <Header/>
        
          <Outlet>
          
          </Outlet>
        
        <Footer/>
    </div>
  )
}

export default Layout
