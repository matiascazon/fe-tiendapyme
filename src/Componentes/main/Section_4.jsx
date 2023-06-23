import React from 'react'
import '../../assets/css/plugins/swiper-bundle.min.css';
import '../../assets/css/plugins/glightbox.min.css';
import '../../assets/css/vendor/bootstrap.min.css';
import '../../assets/css/style.css';

const Section_4 = () => {
  return (
    <section className="banner__section section--padding pt-0">
        <div className="container-fluid">
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb--n28">
                <div className="col mb-28">
                    <div className="banner__items">
                        <a className="banner__items--thumbnail position__relative" href="shop.html"><img className="banner__items--thumbnail__img" src="../../src/assets/img/banner/banner6.webp" alt="banner-img"/>
                            <div className="banner__items--content__style2 right">
                                <h2 className="banner__items--content__style2--title">Single Stylish <br/>
                                    Mini Chair </h2>
                                <span className="banner__items--content__link primary__btn style2">Comprar Ahora</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col mb-28">
                    <div className="banner__items">
                        <a className="banner__items--thumbnail position__relative" href="shop.html"><img className="banner__items--thumbnail__img" src="../../src/assets/img/banner/banner7.webp" alt="banner-img"/>
                            <div className="banner__items--content__style2 right">
                                <h2 className="banner__items--content__style2--title">New Furniture <br/>
                                    Tree Planet </h2>
                                <span className="banner__items--content__link primary__btn style2">Comprar Ahora</span>  
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col mb-28">
                    <div className="banner__items">
                        <a className="banner__items--thumbnail position__relative" href="shop.html"><img className="banner__items--thumbnail__img" src="../../src/assets/img/banner/banner8.webp" alt="banner-img"/>
                            <div className="banner__items--content__style2">
                                <h2 className="banner__items--content__style2--title">Single Stylish <br/>
                                    Mini Chair </h2>
                                <span className="banner__items--content__link primary__btn style2">Comprar Ahora</span>   
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section_4
