import React from "react";
import '../assets/css/plugins/swiper-bundle.min.css';
import '../assets/css/plugins/glightbox.min.css';
import '../assets/css/vendor/bootstrap.min.css';
import '../assets/css/style.css';

const Menu = () => {
    return(
        <div className="header__menu d-none d-lg-block">
            <nav className="header__menu--navigation">
                <ul className="d-flex">
                    <li className="header__menu--items">
                        <a className="header__menu--link" href="index.html">Inicio <span className="menu__plus--icon">+</span></a>
                        <ul className="header__sub--menu">
                            <li className="header__sub--menu__items"><a href="index.html" className="header__sub--menu__link">Inicio uno</a></li>
                            <li className="header__sub--menu__items"><a href="index-2.html" className="header__sub--menu__link">Inicio dos</a></li>
                            <li className="header__sub--menu__items"><a href="index-3.html" className="header__sub--menu__link">Inicio tres</a></li>
                        </ul>
                    </li>
                    <li className="header__menu--items mega__menu--items">
                        <a className="header__menu--link" href="shop.html">Tienda <span className="menu__plus--icon">+</span></a>
                        <ul className="header__mega--menu d-flex">
                            <li className="header__mega--menu__li">
                                <span className="header__mega--subtitle">Primera Columna</span>
                                <ul className="header__mega--sub__menu">
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="shop.html">Tienda barra lateral izquierda</a></li>
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="shop-right-sidebar.html">Tienda barra lateral derecha</a></li>
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="shop-grid.html">Cuadrícula de la tienda</a></li>
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="shop-grid-list.html">Lista de cuadrícula de la tienda</a></li>
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="shop-list.html">Lista de la tienda</a></li>
                                </ul>
                            </li>
                            <li className="header__mega--menu__li">
                                <span className="header__mega--subtitle">Segunda Columna</span>
                                <ul className="header__mega--sub__menu">
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="product-details.html">Producto estándar</a></li>
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="product-variable.html">Producto de vídeo</a></li>
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="product-variable.html">Producto variable</a></li>
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="product-left-sidebar.html">Barra lateral izquierda del producto</a></li>
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="product-gallery.html">Galería de productos</a></li>
                                </ul>
                            </li>
                            <li className="header__mega--menu__li">
                                <span className="header__mega--subtitle">Tercera Columna</span>
                                <ul className="header__mega--sub__menu">
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="my-account.html">Mi cuenta</a></li>
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="my-account-2.html">Mi cuenta 2</a></li>
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="404.html">404 página</a></li>
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="login.html">Página de inicio de sesión</a></li>
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="faq.html">Página de preguntas frecuentes</a></li>
                                </ul>
                            </li>
                            <li className="header__mega--menu__li">
                                <span className="header__mega--subtitle">Cuarta Columna</span>
                                <ul className="header__mega--sub__menu">
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="compare.html">Comparar páginas</a></li>
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="cart.html">Página del carrito</a></li>
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="checkout.html">Página de pago</a></li>
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="wishlist.html">Página de lista de deseos</a></li>
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="404.html">Página de errores</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="header__menu--items">
                        <a className="header__menu--link" href="about.html">Sobre nosotros </a>  
                    </li>
                    <li className="header__menu--items">
                        <a className="header__menu--link" href="blog.html">Blog <span className="menu__plus--icon">+</span> </a>
                        <ul className="header__sub--menu">
                            <li className="header__sub--menu__items"><a href="blog.html" className="header__sub--menu__link">Cuadrícula de blogs</a></li>
                            <li className="header__sub--menu__items"><a href="blog-details.html" className="header__sub--menu__link">Detalles del blog</a></li>
                            <li className="header__sub--menu__items"><a href="blog-left-sidebar.html" className="header__sub--menu__link">Barra lateral izquierda del blog</a></li>
                            <li className="header__sub--menu__items"><a href="blog-right-sidebar.html" className="header__sub--menu__link">Barra lateral derecha del blog</a></li>
                        </ul>
                    </li>
                    <li className="header__menu--items">
                        <a className="header__menu--link " href="#">Paginas <span className="menu__plus--icon">+</span></a>
                        <ul className="header__sub--menu">
                            <li className="header__sub--menu__items"><a href="about.html" className="header__sub--menu__link">Sobre nosotros</a></li>
                            <li className="header__sub--menu__items"><a href="contact.html" className="header__sub--menu__link">Contáctenos</a></li>
                            <li className="header__sub--menu__items"><a href="cart.html" className="header__sub--menu__link">Página del carrito</a></li>
                            <li className="header__sub--menu__items"><a href="portfolio.html" className="header__sub--menu__link">Página de cartera</a></li>
                            <li className="header__sub--menu__items"><a href="wishlist.html" className="header__sub--menu__link">Página de lista de deseos</a></li>
                            <li className="header__sub--menu__items"><a href="login.html" className="header__sub--menu__link">Página de inicio de sesión</a></li>
                            <li className="header__sub--menu__items"><a href="404.html" className="header__sub--menu__link">Página de errores</a></li>
                        </ul>
                    </li>
                    <li className="header__menu--items">
                        <a className="header__menu--link" href="contact.html">Contacto </a>  
                    </li>
                </ul>
            </nav>
        </div>  
    );
    
}

export default Menu