import React from 'react'
import '../assets/css/plugins/swiper-bundle.min.css';
import '../assets/css/plugins/glightbox.min.css';
import '../assets/css/vendor/bootstrap.min.css';
import '../assets/css/style.css';
import Footer_col_1 from './footer/Footer_col_1';
import Footer_col_2 from './footer/Footer_col_2';
import Footer_col_3 from './footer/Footer_col_3';
import Footer_col_4 from './footer/Footer_col_4';
import Footer_copy from './footer/Footer_copy';

const Footer = () => {
  return (
    <footer class="footer__section footer__bg">
        <div class="container-fluid">
            <div class="main__footer">
                <div class="row">
                    {/* Primera Columna Footer */}
                    <Footer_col_1/>
                    {/* Segunda Columna Footer */}
                    <Footer_col_2/>
                    {/* Tercera Columna Footer */}
                    <Footer_col_3/>
                    {/* Cuarta Columna Footer */}
                    <Footer_col_4/>
                </div>
            </div>
            {/* Footer Copyright */}
            <Footer_copy/>
        </div>
    </footer>
  )
}

export default Footer
