import React from 'react'
import '../../assets/css/plugins/swiper-bundle.min.css';
import '../../assets/css/plugins/glightbox.min.css';
import '../../assets/css/vendor/bootstrap.min.css';
import '../../assets/css/style.css';

function Footer_col_2() {
  return (
    <div class="col-lg-3 col-md-6">
      <div class="footer__widget">
          <h2 class="footer__widget--title ">Enlaces <button class="footer__widget--button" aria-label="footer widget button"></button>
              <svg class="footer__widget--title__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394" viewBox="0 0 10.355 6.394">
                  <path  d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor"></path>
              </svg>
          </h2>
          <ul class="footer__widget--menu footer__widget--inner">
              <li class="footer__widget--menu__list"><a class="footer__widget--menu__text" href="about.html">Sobre nosotros</a></li>
              <li class="footer__widget--menu__list"><a class="footer__widget--menu__text" href="wishlist.html">Lista de deseos</a></li>
              <li class="footer__widget--menu__list"><a class="footer__widget--menu__text" href="contact.html">Contáctenos</a></li>
              <li class="footer__widget--menu__list"><a class="footer__widget--menu__text" href="privacy-policy.html">Política de privacidad</a></li>
              <li class="footer__widget--menu__list"><a class="footer__widget--menu__text" href="faq.html">Frecuentemente</a></li>
          </ul>
      </div>
    </div>
  )
}

export default Footer_col_2
