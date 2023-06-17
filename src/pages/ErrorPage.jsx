import React from 'react'
import '../assets/css/plugins/glightbox.min.css';
import '../assets/css/vendor/bootstrap.min.css';
import '../assets/css/style.css';

const ErrorPage = () => {
  return (
    <div>
       <section className="error__section section--padding">
            <div className="container">
                <div className="row row-cols-1">
                    <div className="col">
                        <div className="error__content text-center">
                            <img className="error__content--img mb-50" src="assets/img/other/404-thumb.webp" alt="error-img"/>
                            <h2 className="error__content--title">Opps ! No hemos encontrado esta página  </h2>
                            <p className="error__content--desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi animi aliquid minima assumenda.</p>
                            <a className="error__content--btn primary__btn" href="index.html">Back To Home</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ErrorPage
