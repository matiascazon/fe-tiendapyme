import React from 'react'
import '../../assets/css/plugins/swiper-bundle.min.css';
import '../../assets/css/plugins/glightbox.min.css';
import '../../assets/css/vendor/bootstrap.min.css';
import '../../assets/css/style.css';

function Footer_col_4() {
  return (
    <div class="col-lg-3 col-md-6">
        <div class="footer__widget">
            <h2 class="footer__widget--title ">Boletin informativo <button class="footer__widget--button" aria-label="footer widget button"></button>
                <svg class="footer__widget--title__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394" viewBox="0 0 10.355 6.394">
                    <path  d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor"></path>
                </svg>
            </h2>
            <div class="footer__newsletter footer__widget--inner">
                <p class="footer__newsletter--desc">Recibe actualizaciones suscribiéndote a nuestro boletín semanal</p>
                <form class="newsletter__subscribe--form__style position__relative" action="#">
                    <label>
                        <input class="footer__newsletter--input newsletter__subscribe--input" placeholder="Ingrese su correo" type="email"/>
                    </label>
                    <button class="footer__newsletter--button newsletter__subscribe--button primary__btn" type="submit">Suscribirse
                        <svg class="newsletter__subscribe--button__icon" xmlns="http://www.w3.org/2000/svg" width="9.159" height="7.85" viewBox="0 0 9.159 7.85">
                            <path  data-name="Icon material-send" d="M3,12.35l9.154-3.925L3,4.5,3,7.553l6.542.872L3,9.3Z" transform="translate(-3 -4.5)" fill="currentColor"/>
                        </svg>
                    </button>
                </form> 
            </div>
        </div>
    </div>
  )
}

export default Footer_col_4
