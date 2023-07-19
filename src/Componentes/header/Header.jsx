import React, { useEffect, useState } from "react";
import './../../assets/css/vendor/bootstrap.min.css';
import './../../assets/css/style.css';
import Menu from './Menu'
import Carrito from './../carrito/Carrito'
import MenuMobile from "./MenuMobile";
import { Link } from "react-router-dom";
import Toolbar from "./Toolbar";




const Header = () => {
    const [scrollDown, setScrollDown] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setScrollDown(true);
          } else {
            setScrollDown(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <header className="header__section header__transparent">
        <div className={`main__header header__sticky ${scrollDown ? 'sticky' : ''}`}>
            <div className="container-fluid">
                <div className="main__header--inner position__relative d-flex justify-content-between align-items-center">
                    
                    <MenuMobile/>

                    <div className="main__logo" width={"50"}>   
                        <Link className="main__logo--link" to={`/`}> <img src="src/assets/img/logo/logo_completo.jpg" alt="" /></Link>
                    </div>
                    
                    <Menu/>
                    <div className="header__account">
                        <ul className="d-flex">
                            <li className="header__account--items  header__account--search__items ">
                                <a className="header__account--btn search__open--btn">
                                    <svg className="header__search--button__svg" xmlns="http://www.w3.org/2000/svg" width="26.51" height="23.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"/></svg>  
                                    <span className="visually-hidden">Search</span>
                                </a>
                            </li>
                            <li className="header__account--items">
                                <Link className="header__account--btn" to={"/"}>
                                    <svg xmlns="http://www.w3.org/2000/svg"  width="26.51" height="23.443" viewBox="0 0 512 512"><path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/></svg> 
                                    <span className="visually-hidden">My Account</span>
                                </Link>
                            </li>
                            <li className="header__account--items ">
                                <Link className="header__account--btn" to={`/deseados`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24.526" height="21.82" viewBox="0 0 24.526 21.82">
                                        <path  d="M12.263,21.82a1.438,1.438,0,0,1-.948-.356c-.991-.866-1.946-1.681-2.789-2.4l0,0a51.865,51.865,0,0,1-6.089-5.715A9.129,9.129,0,0,1,0,7.371,7.666,7.666,0,0,1,1.946,2.135,6.6,6.6,0,0,1,6.852,0a6.169,6.169,0,0,1,3.854,1.33,7.884,7.884,0,0,1,1.558,1.627A7.885,7.885,0,0,1,13.821,1.33,6.169,6.169,0,0,1,17.675,0,6.6,6.6,0,0,1,22.58,2.135a7.665,7.665,0,0,1,1.945,5.235,9.128,9.128,0,0,1-2.432,5.975,51.86,51.86,0,0,1-6.089,5.715c-.844.719-1.8,1.535-2.794,2.4a1.439,1.439,0,0,1-.948.356ZM6.852,1.437A5.174,5.174,0,0,0,3,3.109,6.236,6.236,0,0,0,1.437,7.371a7.681,7.681,0,0,0,2.1,5.059,51.039,51.039,0,0,0,5.915,5.539l0,0c.846.721,1.8,1.538,2.8,2.411,1-.874,1.965-1.693,2.812-2.415a51.052,51.052,0,0,0,5.914-5.538,7.682,7.682,0,0,0,2.1-5.059,6.236,6.236,0,0,0-1.565-4.262,5.174,5.174,0,0,0-3.85-1.672A4.765,4.765,0,0,0,14.7,2.467a6.971,6.971,0,0,0-1.658,1.918.907.907,0,0,1-1.558,0A6.965,6.965,0,0,0,9.826,2.467a4.765,4.765,0,0,0-2.975-1.03Zm0,0" transform="translate(0 0)" fill="currentColor"/>
                                    </svg>
                                    
                                </Link>
                            </li>

                            <Carrito/>
                        </ul>
                    </div>                    
                    
                </div>
            </div>
        </div>
    
        {/* <div className="offcanvas__header" tabIndex="-1">
            <div className="offcanvas__inner">
                <div className="offcanvas__logo">
                    <a className="offcanvas__logo_link" href="index.html">
                        <img src="assets/img/logo/nav-log.webp" alt="Furea Logo"/>
                    </a>
                    <button className="offcanvas__close--btn" aria-label="offcanvas close btn">close</button>
                </div>
                <nav className="offcanvas__menu">
                    <ul className="offcanvas__menu_ul">
                        <li className="offcanvas__menu_li">
                            <a className="offcanvas__menu_item" href="index.html">Home</a>
                            <ul className="offcanvas__sub_menu">
                                <li className="offcanvas__sub_menu_li"><a href="index.html" className="offcanvas__sub_menu_item">Home One</a></li>
                                <li className="offcanvas__sub_menu_li"><a href="index-2.html" className="offcanvas__sub_menu_item">Home Two</a></li>
                                <li className="offcanvas__sub_menu_li"><a href="index-3.html" className="offcanvas__sub_menu_item">Home Three</a></li>
                            </ul>
                        </li>
                        <li className="offcanvas__menu_li">
                            <a className="offcanvas__menu_item" href="#">Shop</a>
                            <ul className="offcanvas__sub_menu">
                                <li className="offcanvas__sub_menu_li">
                                    <a href="#" className="offcanvas__sub_menu_item">Column One</a>
                                    <ul className="offcanvas__sub_menu">
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="shop.html">Shop Left Sidebar</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="shop-grid.html">Shop Grid</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="shop-grid-list.html">Shop Grid List</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="shop-list.html">Shop List</a></li>
                                    </ul>
                                </li>
                                <li className="offcanvas__sub_menu_li">
                                    <a href="#" className="offcanvas__sub_menu_item">Column Two</a>
                                    <ul className="offcanvas__sub_menu">
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="product-details.html">Standard Product</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="product-variable.html">Video Product</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="product-variable.html">Variable Product</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="product-left-sidebar.html">Product Left Sidebar</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="product-gallery.html">Product Gallery</a></li>
                                    </ul>
                                </li>
                                <li className="offcanvas__sub_menu_li">
                                    <a href="#" className="offcanvas__sub_menu_item">Column Three</a>
                                    <ul className="offcanvas__sub_menu">
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="my-account.html">My Account</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="my-account-2.html">My Account 2</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="404.html">404 Page</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="login.html">Login Page</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="faq.html">Faq Page</a></li>
                                    </ul>
                                </li>
                                <li className="offcanvas__sub_menu_li">
                                    <a href="#" className="offcanvas__sub_menu_item">Column Four</a>
                                    <ul className="offcanvas__sub_menu">
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="compare.html">Compare Pages</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="cart.html">Cart Page</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="checkout.html">Checkout page</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="wishlist.html">Wishlist Page</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="404.html">Error Page</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="offcanvas__menu_li">
                            <a className="offcanvas__menu_item" href="#">Blog</a>
                            <ul className="offcanvas__sub_menu">
                                <li className="offcanvas__sub_menu_li"><a href="blog.html" className="offcanvas__sub_menu_item">Blog Grid</a></li>
                                <li className="offcanvas__sub_menu_li"><a href="blog-details.html" className="offcanvas__sub_menu_item">Blog Details</a></li>
                                <li className="offcanvas__sub_menu_li"><a href="blog-left-sidebar.html" className="offcanvas__sub_menu_item">Blog Left Sidebar</a></li>
                                <li className="offcanvas__sub_menu_li"><a href="blog-right-sidebar.html" className="offcanvas__sub_menu_item">Blog Right Sidebar</a></li>
                            </ul>
                        </li>
                        <li className="offcanvas__menu_li">
                            <a className="offcanvas__menu_item" href="#">Pages</a>
                            <ul className="offcanvas__sub_menu">
                                <li className="offcanvas__sub_menu_li"><a href="about.html" className="offcanvas__sub_menu_item">About Us</a></li>
                                <li className="offcanvas__sub_menu_li"><a href="contact.html" className="offcanvas__sub_menu_item">Contact Us</a></li>
                                <li className="offcanvas__sub_menu_li"><a href="cart.html" className="offcanvas__sub_menu_item">Cart Page</a></li>
                                <li className="offcanvas__sub_menu_li"><a href="portfolio.html" className="offcanvas__sub_menu_item">Portfolio Page</a></li>
                                <li className="offcanvas__sub_menu_li"><a href="wishlist.html" className="offcanvas__sub_menu_item">Wishlist Page</a></li>
                                <li className="offcanvas__sub_menu_li"><a href="login.html" className="offcanvas__sub_menu_item">Login Page</a></li>
                                <li className="offcanvas__sub_menu_li"><a href="404.html" className="offcanvas__sub_menu_item">Error Page</a></li>
                            </ul>
                        </li>
                        <li className="offcanvas__menu_li"><a className="offcanvas__menu_item" href="about.html">About</a></li>
                        <li className="offcanvas__menu_li"><a className="offcanvas__menu_item" href="contact.html">Contact</a></li>
                    </ul>
                    <div className="offcanvas__account--items">
                        <a className="offcanvas__account--items__btn d-flex align-items-center" href="login.html">
                        <span className="offcanvas__account--items__icon"> 
                            <svg xmlns="http://www.w3.org/2000/svg"  width="20.51" height="19.443" viewBox="0 0 512 512"><path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/></svg> 
                            </span>
                        <span className="offcanvas__account--items__label">Login / Register</span>
                        </a>
                    </div>

                </nav>
            </div>
        </div> */}
       
        <Toolbar/>

        <div className="predictive__search--box " tabIndex="-1">
            <div className="predictive__search--box__inner">
                <h2 className="predictive__search--title">Search Products</h2>
                <form className="predictive__search--form" action="#">
                    <label>
                        <input className="predictive__search--input" placeholder="Search Here" type="text"/>
                    </label>
                    <button className="predictive__search--button" aria-label="search button"><svg className="header__search--button__svg" xmlns="http://www.w3.org/2000/svg" width="30.51" height="25.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"/></svg>  </button>
                </form>
            </div>
            <button className="predictive__search--close__btn" aria-label="search close btn">
                <svg className="predictive__search--close__icon" xmlns="http://www.w3.org/2000/svg" width="40.51" height="30.443"  viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368"/></svg>
            </button>
        </div>   
    </header>
  )
}

export default Header
