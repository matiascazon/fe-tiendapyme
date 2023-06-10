import React from 'react'
import '../../assets/css/plugins/swiper-bundle.min.css';
import '../../assets/css/plugins/glightbox.min.css';
import '../../assets/css/vendor/bootstrap.min.css';
import '../../assets/css/style.css';

const Section_4 = () => {
  return (
    <section class="banner__section section--padding pt-0">
        <div class="container-fluid">
            <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb--n28">
                <div class="col mb-28">
                    <div class="banner__items">
                        <a class="banner__items--thumbnail position__relative" href="shop.html"><img class="banner__items--thumbnail__img" src="../../src/assets/img/banner/banner6.webp" alt="banner-img"/>
                            <div class="banner__items--content__style2 right">
                                <h2 class="banner__items--content__style2--title">Individual <br/>
                                    Mini Silla </h2>
                                <span class="banner__items--content__link primary__btn style2">Comprar Ahora</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col mb-28">
                    <div class="banner__items">
                        <a class="banner__items--thumbnail position__relative" href="shop.html"><img class="banner__items--thumbnail__img" src="../../src/assets/img/banner/banner7.webp" alt="banner-img"/>
                            <div class="banner__items--content__style2 right">
                                <h2 class="banner__items--content__style2--title">Nuevos Muebles <br/>
                                    Planeta árbol</h2>
                                <span class="banner__items--content__link primary__btn style2">Comprar Ahora</span>  
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col mb-28">
                    <div class="banner__items">
                        <a class="banner__items--thumbnail position__relative" href="shop.html"><img class="banner__items--thumbnail__img" src="../../src/assets/img/banner/banner8.webp" alt="banner-img"/>
                            <div class="banner__items--content__style2">
                                <h2 class="banner__items--content__style2--title">Individual <br/>
                                    Mini Silla </h2>
                                <span class="banner__items--content__link primary__btn style2">Comprar Ahora</span>   
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
