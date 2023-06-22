import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Componentes/Footer'
import Header from '../Componentes/header/Header'


const Layout = () => {
  return (
    <>
        <Header/>
          <Outlet>
          
          </Outlet>
        <Footer/>
    </>
  )
}

export default Layout
