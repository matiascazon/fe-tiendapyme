import React, { useEffect } from 'react'
import '../assets/css/vendor/bootstrap.min.css';
import '../assets/css/style.css';
import FormularioLogin from '../Componentes/login/FormularioLogin'

const Login = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])


  return (
    <div className="login__section section--padding">
        <div className="container">
            <div className="login__section--inner">
                <div className="row row-cols-md-1 row-cols-1">
                    <FormularioLogin/>
                </div>
            </div>
        </div>     
    </div>
  )
}

export default Login
