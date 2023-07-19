import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../auth/auth'

const GuestRoute = ({children}) => { //actua de forma contraria al protected, si el usuario NO está autenticado puede acceder a las rutas
    const {isAuthenticated} = useContext(AuthContext)
    return isAuthenticated ? <Navigate to={"/"}></Navigate> : children
}
export default GuestRoute