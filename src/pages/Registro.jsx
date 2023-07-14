import React, { useEffect } from 'react'
import '../assets/css/vendor/bootstrap.min.css';
import '../assets/css/style.css';
import FormularioRegister from '../Componentes/login/FormularioRegister'

const Registro = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
      },[])

    return (
        <div className="login__section section--padding">
            <div className="container">
                <div className="login__section--inner">
                    <div className="row row-cols-md row-cols-1">
                        <FormularioRegister/>
                    </div>
                </div>
            </div>     
        </div>
    )
}

export default Registro



