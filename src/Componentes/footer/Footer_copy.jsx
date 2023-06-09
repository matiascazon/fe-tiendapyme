import React from 'react'
import '../../assets/css/plugins/swiper-bundle.min.css';
import '../../assets/css/plugins/glightbox.min.css';
import '../../assets/css/vendor/bootstrap.min.css';
import '../../assets/css/style.css';

function Footer_copy() {
  return (
    <div className="footer__bottom d-flex justify-content-between align-items-center">
                <p className="copyright__content">Copyright © 2022 <a className="copyright__content--link" href="index.html">Furea</a> . All Rights Reserved.Design By Furea</p>
                <div className="footer__payment text-right">
                    <img className="footer__payment--visa__card display-block" src="assets/img/other/payment-visa-card.webp" alt="visa-card"/>
                </div>
    </div>
  )
}

export default Footer_copy
