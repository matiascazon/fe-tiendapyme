import React, { useContext, useState } from 'react'
import '../../assets/css/plugins/glightbox.min.css';
import '../../assets/css/vendor/bootstrap.min.css';
import '../../assets/css/style.css';
import {contextoCarrito} from './../../context/contextCarrito'
import { obtenerTienda } from '../../data/tienda';

const ProductoDetalle = ({producto}) => {
    
    const [compra_cantidad,setCompra_Cantidad] = useState(1)
    const {agregarProducto,carrito} = useContext(contextoCarrito)

    const agregarProductoHanlder = async () => {

        const tienda = await obtenerTienda(producto.producto_tienda) 
        
        const nuevoProducto = { //nuevo producto en el carrito
            // id_operacion: `t${producto.producto_tienda}${producto.id}${Date.now()}`, //t+id_tienda+id_producto+fecha
            compra_producto: producto.id,
            compra_producto_nombre: producto.producto_nombre,
            compra_precio: producto.producto_valor,
            compra_producto_img: producto.producto_imagen,
            compra_comprador: '1ab0d5da-43b9-46c2-a7e1-bd934651fe1e', //id del comprador
            compra_comprador_nombre: 'Ignacio Gareca',
            compra_tienda: producto.producto_tienda, //id de la tienda
            compra_tienda_nombre: tienda.tienda_nombre,
            compra_operacion: null
        }

        const existeProducto = carrito.find(item => item.compra_producto === nuevoProducto.compra_producto) //verificar si el producto ya existe en el carrito comparando el id del producto
        setCompra_Cantidad(existeProducto ? existeProducto.compra_cantidad += 1 : compra_cantidad) 
        agregarProducto(nuevoProducto,compra_cantidad)
        setCompra_Cantidad(1)
    }

    const decrementarCantidadHandler = () => {
        if(compra_cantidad > 1){
            setCompra_Cantidad(compra_cantidad - 1)
        }
    }
    const incrementarCantidadHandler = () => {
        if(compra_cantidad < 10){
            setCompra_Cantidad(compra_cantidad + 1)
        }
    }

  return (
    <div>
        <section className="product__details--section section--padding">
            <div className="container">
                <div className="row row-cols-lg-2 row-cols-md-2">
                    <div className="col">
                        <div className="product__details--media">
                            <div className="product__media--preview  swiper">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="product__media--preview__items">
                                            <a className="product__media--preview__items--link glightbox" data-gallery="product-media-preview" href="assets/img/product/big-product1.webp"><img className="product__media--preview__items--img" src={`http://vps-3326270-x.dattaweb.com:8055/assets/${producto.producto_imagen}`} alt="product-media-img"/></a>
                                            <div className="product__media--view__icon">
                                                <a className="product__media--view__icon--link glightbox" href="assets/img/product/big-product1.webp" data-gallery="product-media-preview">
                                                    <svg className="product__media--view__icon--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="22.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"></path><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"></path></svg>
                                                    <span className="visually-hidden">Media Gallery</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="product__media--preview__items">
                                            <a className="product__media--preview__items--link glightbox" data-gallery="product-media-preview" href="assets/img/product/big-product2.webp"><img className="product__media--preview__items--img" src="assets/img/product/big-product2.webp" alt="product-media-img"/></a>
                                            <div className="product__media--view__icon">
                                                <a className="product__media--view__icon--link glightbox" href="assets/img/product/big-product2.webp" data-gallery="product-media-preview">
                                                    <svg className="product__media--view__icon--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="22.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"></path><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"></path></svg>
                                                    <span className="visually-hidden">Media Gallery</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="product__media--preview__items">
                                            <a className="product__media--preview__items--link glightbox" data-gallery="product-media-preview" href="assets/img/product/big-product3.webp"><img className="product__media--preview__items--img" src="assets/img/product/big-product3.webp" alt="product-media-img"/></a>
                                            <div className="product__media--view__icon">
                                                <a className="product__media--view__icon--link glightbox" href="assets/img/product/big-product3.webp" data-gallery="product-media-preview">
                                                    <svg className="product__media--view__icon--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="22.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"></path><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"></path></svg>
                                                    <span className="visually-hidden">Media Gallery</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="product__media--preview__items">
                                            <a className="product__media--preview__items--link glightbox" data-gallery="product-media-preview" href="assets/img/product/big-product4.webp"><img className="product__media--preview__items--img" src="assets/img/product/big-product4.webp" alt="product-media-img"/></a>
                                            <div className="product__media--view__icon">
                                                <a className="product__media--view__icon--link glightbox" href="assets/img/product/big-product4.webp" data-gallery="product-media-preview">
                                                    <svg className="product__media--view__icon--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="22.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"></path><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"></path></svg>
                                                    <span className="visually-hidden">Media Gallery</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="product__media--preview__items">
                                            <a className="product__media--preview__items--link glightbox" data-gallery="product-media-preview" href="assets/img/product/big-product5.webp"><img className="product__media--preview__items--img" src="assets/img/product/big-product5.webp" alt="product-media-img"/></a>
                                            <div className="product__media--view__icon">
                                                <a className="product__media--view__icon--link glightbox" href="assets/img/product/big-product5.webp" data-gallery="product-media-preview">
                                                    <svg className="product__media--view__icon--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="22.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"></path><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"></path></svg>
                                                    <span className="visually-hidden">Media Gallery</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="product__media--preview__items">
                                            <a className="product__media--preview__items--link glightbox" data-gallery="product-media-preview" href="assets/img/product/big-product6.webp"><img className="product__media--preview__items--img" src="assets/img/product/big-product6.webp" alt="product-media-img"/></a>
                                            <div className="product__media--view__icon">
                                                <a className="product__media--view__icon--link glightbox" href="assets/img/product/big-product6.webp" data-gallery="product-media-preview">
                                                    <svg className="product__media--view__icon--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="22.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"></path><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"></path></svg>
                                                    <span className="visually-hidden">Media Gallery</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product__media--nav swiper">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="product__media--nav__items">
                                            <img className="product__media--nav__items--img" src="assets/img/product/small-product1.webp" alt="product-nav-img"/>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="product__media--nav__items">
                                            <img className="product__media--nav__items--img" src="assets/img/product/small-product2.webp" alt="product-nav-img"/>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="product__media--nav__items">
                                            <img className="product__media--nav__items--img" src="assets/img/product/small-product3.webp" alt="product-nav-img"/>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="product__media--nav__items">
                                            <img className="product__media--nav__items--img" src="assets/img/product/small-product4.webp" alt="product-nav-img"/>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="product__media--nav__items">
                                            <img className="product__media--nav__items--img" src="assets/img/product/small-product5.webp" alt="product-nav-img"/>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="product__media--nav__items">
                                            <img className="product__media--nav__items--img" src="assets/img/product/small-product6.webp" alt="product-nav-img"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper__nav--btn swiper-button-next"></div>
                                <div className="swiper__nav--btn swiper-button-prev"></div>
                            </div>
                            
                        </div>
                    </div>   
                    <div className="col">
                        <div className="product__details--info">
                            {/* <form action="#"> */}
                                <h2 className="product__details--info__title mb-15">{producto.producto_nombre}</h2>
                                <div className="product__details--info__price mb-10">
                                    <span className="current__price">{producto.producto_valor}</span>
                                    {/* <span className="old__price">$320.00</span> */}
                                </div>
                                {/* <div className="product__details--info__rating d-flex align-items-center mb-15">
                                    <ul className="rating product__list--rating d-flex">
                                        <li className="rating__list">
                                            <span className="rating__list--icon">
                                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="13.105" height="13.732" viewBox="0 0 10.105 9.732">
                                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"></path>
                                                </svg>
                                            </span>
                                        </li>
                                        <li className="rating__list">
                                            <span className="rating__list--icon">
                                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="13.105" height="13.732" viewBox="0 0 10.105 9.732">
                                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"></path>
                                                </svg>
                                            </span>
                                        </li>
                                        <li className="rating__list">
                                            <span className="rating__list--icon">
                                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="13.105" height="13.732" viewBox="0 0 10.105 9.732">
                                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"></path>
                                                </svg>
                                            </span>
                                        </li>
                                        <li className="rating__list">
                                            <span className="rating__list--icon">
                                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="13.105" height="13.732" viewBox="0 0 10.105 9.732">
                                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"></path>
                                                </svg>
                                            </span>
                                        </li>
                                        <li className="rating__list">
                                            <span className="rating__list--icon">
                                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="13.105" height="13.732" viewBox="0 0 10.105 9.732">
                                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"></path>
                                                </svg>
                                            </span>
                                        </li>
                                        <li className="rating__list"><span className="rating__list--text">( 5.0)</span></li>
                                    </ul>
                                </div> */}
                                <p className="product__details--info__desc mb-20">{producto.producto_descripcion}</p>
                                <div className="product__variant">
                                    <div className="product__variant--list quantity d-flex align-items-center mb-20">
                                        <div className="quantity__box">
                                            <button type="button" className="quantity__value quickview__value--quantity decrease" aria-label="quantity value" value="Decrease Value" onClick={decrementarCantidadHandler}>-</button>
                                            <label>
                                                <input type="number" disabled className="quantity__number quickview__value--number" value={compra_cantidad} />
                                            </label>
                                            <button type="button" className="quantity__value quickview__value--quantity increase" aria-label="quantity value" value="Increase Value" onClick={incrementarCantidadHandler}>+</button>
                                        </div>
                                        <button className="quickview__cart--btn primary__btn" onClick={agregarProductoHanlder}>Añadir al Carrito</button>  
                                    </div>
                                    <div className="product__variant--list mb-15">
                                        <a className="variant__wishlist--icon mb-15" href="wishlist.html" title="Add to wishlist">
                                            <svg className="quickview__variant--wishlist__svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                                            Add to Wishlist
                                        </a>
                                        <button className="variant__buy--now__btn primary__btn" type="submit">Buy it now</button>
                                    </div>
                                    {/* <div className="product__variant--list mb-15">
                                        <div className="product__details--info__meta">
                                            <p className="product__details--info__meta--list"><strong>Barcode:</strong>  <span>565461</span> </p>
                                            <p className="product__details--info__meta--list"><strong>Sky:</strong>  <span>4420</span> </p>
                                            <p className="product__details--info__meta--list"><strong>Vendor:</strong>  <span>Belo</span> </p>
                                            <p className="product__details--info__meta--list"><strong>Type:</strong>  <span>Sofa</span> </p>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="quickview__social d-flex align-items-center mb-15">
                                    <label className="quickview__social--title">Redes Sociales:</label>
                                    <ul className="quickview__social--wrapper mt-0 d-flex">
                                        <li className="quickview__social--list">
                                            <a className="quickview__social--icon" target="_blank" href="https://www.facebook.com">
                                                <svg  xmlns="http://www.w3.org/2000/svg" width="7.667" height="16.524" viewBox="0 0 7.667 16.524">
                                                    <path  data-name="Path 237" d="M967.495,353.678h-2.3v8.253h-3.437v-8.253H960.13V350.77h1.624v-1.888a4.087,4.087,0,0,1,.264-1.492,2.9,2.9,0,0,1,1.039-1.379,3.626,3.626,0,0,1,2.153-.6l2.549.019v2.833h-1.851a.732.732,0,0,0-.472.151.8.8,0,0,0-.246.642v1.719H967.8Z" transform="translate(-960.13 -345.407)" fill="currentColor"/>
                                                </svg>
                                                <span className="visually-hidden">Facebook</span>
                                            </a>
                                        </li>
                                        <li className="quickview__social--list">
                                            <a className="quickview__social--icon" target="_blank" href="https://twitter.com">
                                                <svg  xmlns="http://www.w3.org/2000/svg" width="16.489" height="13.384" viewBox="0 0 16.489 13.384">
                                                    <path  data-name="Path 303" d="M966.025,1144.2v.433a9.783,9.783,0,0,1-.621,3.388,10.1,10.1,0,0,1-1.845,3.087,9.153,9.153,0,0,1-3.012,2.259,9.825,9.825,0,0,1-4.122.866,9.632,9.632,0,0,1-2.748-.4,9.346,9.346,0,0,1-2.447-1.11q.4.038.809.038a6.723,6.723,0,0,0,2.24-.376,7.022,7.022,0,0,0,1.958-1.054,3.379,3.379,0,0,1-1.958-.687,3.259,3.259,0,0,1-1.186-1.666,3.364,3.364,0,0,0,.621.056,3.488,3.488,0,0,0,.885-.113,3.267,3.267,0,0,1-1.374-.631,3.356,3.356,0,0,1-.969-1.186,3.524,3.524,0,0,1-.367-1.5v-.057a3.172,3.172,0,0,0,1.544.433,3.407,3.407,0,0,1-1.1-1.214,3.308,3.308,0,0,1-.4-1.609,3.362,3.362,0,0,1,.452-1.694,9.652,9.652,0,0,0,6.964,3.538,3.911,3.911,0,0,1-.075-.772,3.293,3.293,0,0,1,.452-1.694,3.409,3.409,0,0,1,1.233-1.233,3.257,3.257,0,0,1,1.685-.461,3.351,3.351,0,0,1,2.466,1.073,6.572,6.572,0,0,0,2.146-.828,3.272,3.272,0,0,1-.574,1.083,3.477,3.477,0,0,1-.913.8,6.869,6.869,0,0,0,1.958-.546A7.074,7.074,0,0,1,966.025,1144.2Z" transform="translate(-951.23 -1140.849)" fill="currentColor"/>
                                                </svg>
                                                <span className="visually-hidden">Twitter</span>
                                            </a>
                                        </li>
                                        {/* <li className="quickview__social--list">
                                            <a className="quickview__social--icon" target="_blank" href="https://www.youtube.com">
                                                <svg  xmlns="http://www.w3.org/2000/svg" width="16.49" height="11.582" viewBox="0 0 16.49 11.582">
                                                    <path  data-name="Path 321" d="M967.759,1365.592q0,1.377-.019,1.717-.076,1.114-.151,1.622a3.981,3.981,0,0,1-.245.925,1.847,1.847,0,0,1-.453.717,2.171,2.171,0,0,1-1.151.6q-3.585.265-7.641.189-2.377-.038-3.387-.085a11.337,11.337,0,0,1-1.5-.142,2.206,2.206,0,0,1-1.113-.585,2.562,2.562,0,0,1-.528-1.037,3.523,3.523,0,0,1-.141-.585c-.032-.2-.06-.5-.085-.906a38.894,38.894,0,0,1,0-4.867l.113-.925a4.382,4.382,0,0,1,.208-.906,2.069,2.069,0,0,1,.491-.755,2.409,2.409,0,0,1,1.113-.566,19.2,19.2,0,0,1,2.292-.151q1.82-.056,3.953-.056t3.952.066q1.821.067,2.311.142a2.3,2.3,0,0,1,.726.283,1.865,1.865,0,0,1,.557.49,3.425,3.425,0,0,1,.434,1.019,5.72,5.72,0,0,1,.189,1.075q0,.095.057,1C967.752,1364.1,967.759,1364.677,967.759,1365.592Zm-7.6.925q1.49-.754,2.113-1.094l-4.434-2.339v4.66Q958.609,1367.311,960.156,1366.517Z" transform="translate(-951.269 -1359.8)" fill="currentColor"/>
                                                </svg>
                                                <span className="visually-hidden">Youtube</span>
                                            </a>
                                        </li> */}
                                    </ul>
                                </div>
                                <div className="guarantee__safe--checkout">
                                    <h5 className="guarantee__safe--checkout__title">Pago seguro garantizado</h5>
                                    <img className="guarantee__safe--checkout__img" src="assets/img/other/safe-checkout.webp" alt="Payment Image"/>
                                </div>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ProductoDetalle
