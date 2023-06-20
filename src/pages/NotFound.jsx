import React from 'react'
import '../assets/css/vendor/bootstrap.min.css';
import '../assets/css/style.css';
import { Link, useRouteError } from 'react-router-dom';


const NotFound = () => {
    const error = useRouteError()
    return (
    <section className="error__section section--padding">
        <div className="container">
            <div className="row row-cols-1">
                <div className="col">
                    <div className="error__content text-center">
                        {/* <img className="error__content--img mb-50" src="assets/img/other/404-thumb.webp" alt="error-img"/> */}
                        
                        <h2 className="error__content--title">Error</h2>
                        
                        <p className="error__content--desc">Página no encontrada</p>
                        <Link className="error__content--btn primary__btn" to={'/'}>Inicio</Link>
                    </div>
                </div>
            </div>
        </div>
    </section> 
  )
}

export default NotFound
