import React from 'react'
import '../../assets/css/plugins/swiper-bundle.min.css';
import '../../assets/css/plugins/glightbox.min.css';
import '../../assets/css/vendor/bootstrap.min.css';
import '../../assets/css/style.css';
import CartaProducto from '../CartaProducto';

const Section_5 = ({productos}) => {
  return (
    <section className="product__section section--padding pt-0">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-8 col-12 product__col--width__8">
                    <div className="product__section--wrapper">
                        <div className="section__heading style2 position__relative border-bottom mb-35">
                            <h2 className="section__heading--maintitle">Wooden Furniture</h2>
                            <img className="section__heading--position__img" src="../../src/assets/img/other/heading-shape-img.webp" alt="heading-shape-img"/>
                        </div>
                        <div className="product__section--inner">
                            <div className="row row-cols-xxl-4 row-cols-xl-3 row-cols-lg-4 row-cols-md-3 row-cols-2 mb--n25">
                                {productos.map((producto) => (
                                    <CartaProducto
                                        key={producto.id}
                                        producto={producto}
                                    />
                                ))}
                                {productos.map((producto) => (
                                    <CartaProducto
                                        key={producto.id}
                                        producto={producto}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 offset-xl-0 col-lg-6 offset-lg-3 col-md-8  product__col--width__4">
                    <div className="deals__banner--thumbnail">
                        <a className="deals__banner--thumbnail__link display-block position__relative" href="shop.html"><img className="deals__banner--thumbnail__img display-block" src="../../src/assets/img/banner/banner9.webp" alt="deals-thumbnail-img"/>
                            <div className="deals__banner--content text-center">
                                <h2 className="deals__banner--content__maintitle h3">Bring Beauty With <br/>
                                    Furniture Tree </h2>
                                <div className="deals__banner--countdown d-flex justify-content-center" data-countdown="Sep 30, 2022 00:00:00"></div>
                                <span className="primary__btn style2">Order Now</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section_5
