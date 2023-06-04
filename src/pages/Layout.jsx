import React from 'react'
import Header from '../Componentes/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Componentes/Footer'


const Layout = () => {
  return (
    <div>
        <Header/>
        <main>
            <Outlet>

            </Outlet>
        </main>
        <Footer/>
    </div>
  )
}

export default Layout
