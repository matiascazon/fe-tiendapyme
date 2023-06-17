import React from 'react'
import '../assets/css/plugins/glightbox.min.css';
import '../assets/css/vendor/bootstrap.min.css';
import '../assets/css/style.css';
import FormularioLogin from '../Componentes/login/FormularioLogin'
import FormularioRegister from '../Componentes/login/FormularioRegister'

const Login = () => {
  return (
    <div className="login__section section--padding">
        <div className="container">
            <form action="#">
                <div className="login__section--inner">
                    <div className="row row-cols-md-2 row-cols-1">
                        <FormularioLogin/>
                        <FormularioRegister/>
                    </div>
                </div>
            </form>
        </div>     
    </div>
  )
}

export default Login
