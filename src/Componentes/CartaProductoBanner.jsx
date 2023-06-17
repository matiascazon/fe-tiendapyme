import React from 'react'
import '../assets/css/plugins/swiper-bundle.min.css';
import '../assets/css/plugins/glightbox.min.css';
import '../assets/css/vendor/bootstrap.min.css';
import '../assets/css/style.css';

const CartaProductoBanner = ({producto}) => {
  // console.log(producto)
  return (
    <div className="col-lg-6 col-md-6 col-sm-6 mb-28">                 
      <div className="banner__items">
          <a className="banner__items--thumbnail position__relative" href="shop.html"><img className="banner__items--thumbnail__img" src={`http://vps-3326270-x.dattaweb.com:8055/assets/${producto.producto_imagen}`} alt="banner-img"/>
              <div className="banner__items--content one">
                  <h2 className="banner__items--content__title">{producto.producto_nombre}</h2>
              </div>
          </a>
      </div>
    </div>
  )
}

export default CartaProductoBanner
