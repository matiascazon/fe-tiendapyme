import React from 'react'
import '../../assets/css/plugins/swiper-bundle.min.css';
import '../../assets/css/plugins/glightbox.min.css';
import '../../assets/css/vendor/bootstrap.min.css';
import '../../assets/css/style.css';

function Footer_copy() {
  return (
    <div class="footer__bottom d-flex justify-content-between align-items-center">
                <p class="copyright__content">Copyright © 2022 <a class="copyright__content--link" href="index.html">TiendaPyme</a> Todos los derechos reservados.</p>
                <div class="footer__payment text-right">
                    <img class="footer__payment--visa__card display-block" src="assets/img/other/payment-visa-card.webp" alt="visa-card"/>
                </div>
    </div>
  )
}

export default Footer_copy
