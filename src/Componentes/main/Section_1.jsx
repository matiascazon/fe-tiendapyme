import React from 'react'
import '../../assets/css/plugins/swiper-bundle.min.css';
import '../../assets/css/plugins/glightbox.min.css';
import '../../assets/css/vendor/bootstrap.min.css';
import '../../assets/css/style.css';

const Section_1 = () => {
  return (
    <section class="hero__slider--section">
    <div class="hero__slider--inner hero__slider--activation swiper">
        <div class="hero__slider--wrapper swiper-wrapper">
            <div class="swiper-slide ">
                <div class="hero__slider--items hero__slider--bg slider1">
                    <div class="container-fluid">
                        <div class="hero__slider--items__inner">
                            <div class="row row-cols-1">
                                <div class="col">
                                    <div class="slider__content">
                                        <p class="slider__content--desc desc1 text-white mb-15">Descubre nuestra mejor colección de muebles de casa</p> 
                                        <h2 class="slider__content--maintitle text-white h1">Muebles con estilo <br/>
                                            traer belleza</h2>
                                        <p class="slider__content--desc text-white mb-35 d-sm-2-none">Los grandes muebles pueden traer belleza a su hogar, así que compre nuestros populares <br/>
                                            y elegantes muebles. Ahora obtienes hasta un 100% de descuento ahora.</p>    
                                        <a class="slider__content--btn primary__btn" href="shop.html">Empezar a comprar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-slide ">
                <div class="hero__slider--items hero__slider--bg slider2">
                    <div class="container-fluid">
                        <div class="hero__slider--items__inner">
                            <div class="row">
                                <div class="col-lg-6 offset-lg-6">
                                    <div class="slider__content text-center">
                                        <p class="slider__content--desc desc1 right text-white mb-15">Descubre nuestra mejor colección de muebles de casa</p> 
                                        <h2 class="slider__content--maintitle text-white h1">Muebles con estilo <br/>
                                        traer belleza</h2>
                                        <p class="slider__content--desc text-white mb-35 d-sm-2-none">Los grandes muebles pueden traer belleza a su hogar, así que compre nuestros populares <br/>
                                            y elegantes muebles. Ahora obtienes hasta un 100% de descuento ahora.</p>     
                                        <a class="slider__content--btn primary__btn" href="shop.html">Empezar a comprar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-slide ">
                <div class="hero__slider--items hero__slider--bg slider3">
                    <div class="container-fluid">
                        <div class="hero__slider--items__inner">
                            <div class="row row-cols-1">
                                <div class="col">
                                    <div class="slider__content">
                                        <p class="slider__content--desc desc1 text-white mb-15">Descubre nuestra mejor colección de muebles de casa</p> 
                                        <h2 class="slider__content--maintitle text-white h1">Muebles con estilo <br/>
                                        traer belleza</h2>
                                        <p class="slider__content--desc text-white mb-35 d-sm-2-none">Los grandes muebles pueden traer belleza a su hogar, así que compre nuestros populares <br/>
                                            y elegantes muebles. Ahora obtienes hasta un 100% de descuento ahora.</p>   
                                        <a class="slider__content--btn primary__btn" href="shop.html">Empezar a comprar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="swiper__nav--btn swiper-button-next"></div>
        <div class="swiper__nav--btn swiper-button-prev"></div>
    </div>
    </section>
  )
}

export default Section_1
