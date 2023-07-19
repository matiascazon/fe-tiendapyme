import React, { useContext } from 'react'
import { Navigate, Outlet, redirect } from 'react-router-dom'
import { AuthContext } from '../../auth/auth'

const ProtectedRoute = ({children}) => {
    const {isAuthenticated,user} = useContext(AuthContext)
    console.log(isAuthenticated)
    console.log(user)
    return isAuthenticated ? children : <Navigate to={"/login"}></Navigate>
}
export default ProtectedRoute
