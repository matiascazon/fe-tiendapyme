import React from "react";
import './../../assets/css/vendor/bootstrap.min.css';
import './../../assets/css/style.css';

const Menu = () => {
    return(
        <div className="header__menu d-none d-lg-block">
            <nav className="header__menu--navigation">
                <ul className="d-flex">
                    <li className="header__menu--items">
                        <a className="header__menu--link" href="index.html">Home <span className="menu__plus--icon">+</span></a>
                        <ul className="header__sub--menu">
                            <li className="header__sub--menu__items"><a href="index.html" className="header__sub--menu__link">Home One</a></li>
                            <li className="header__sub--menu__items"><a href="index-2.html" className="header__sub--menu__link">Home Two</a></li>
                            <li className="header__sub--menu__items"><a href="index-3.html" className="header__sub--menu__link">Home Three</a></li>
                        </ul>
                    </li>
                    <li className="header__menu--items mega__menu--items">
                        <a className="header__menu--link" href="shop.html">Shop <span className="menu__plus--icon">+</span></a>
                        <ul className="header__mega--menu d-flex">
                            <li className="header__mega--menu__li">
                                <span className="header__mega--subtitle">Column One</span>
                                <ul className="header__mega--sub__menu">
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="shop.html">Shop Left Sidebar</a></li>
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="shop-grid.html">Shop Grid</a></li>
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="shop-grid-list.html">Shop Grid List</a></li>
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="shop-list.html">Shop List</a></li>
                                </ul>
                            </li>
                            <li className="header__mega--menu__li">
                                <span className="header__mega--subtitle">Column Two</span>
                                <ul className="header__mega--sub__menu">
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="product-details.html">Standard Product</a></li>
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="product-variable.html">Video Product</a></li>
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="product-variable.html">Variable Product</a></li>
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="product-left-sidebar.html">Product Left Sidebar</a></li>
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="product-gallery.html">Product Gallery</a></li>
                                </ul>
                            </li>
                            <li className="header__mega--menu__li">
                                <span className="header__mega--subtitle">Column Three</span>
                                <ul className="header__mega--sub__menu">
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="my-account.html">My Account</a></li>
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="my-account-2.html">My Account 2</a></li>
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="404.html">404 Page</a></li>
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="login.html">Login Page</a></li>
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="faq.html">Faq Page</a></li>
                                </ul>
                            </li>
                            <li className="header__mega--menu__li">
                                <span className="header__mega--subtitle">Column Four</span>
                                <ul className="header__mega--sub__menu">
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="compare.html">Compare Pages</a></li>
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="cart.html">Cart Page</a></li>
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="checkout.html">Checkout page</a></li>
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="wishlist.html">Wishlist Page</a></li>
                                    <li className="header__mega--sub__menu_li"><a className="header__mega--sub__menu--title" href="404.html">Error Page</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="header__menu--items">
                        <a className="header__menu--link" href="about.html">About US </a>  
                    </li>
                    <li className="header__menu--items">
                        <a className="header__menu--link" href="blog.html">Blog <span className="menu__plus--icon">+</span> </a>
                        <ul className="header__sub--menu">
                            <li className="header__sub--menu__items"><a href="blog.html" className="header__sub--menu__link">Blog Grid</a></li>
                            <li className="header__sub--menu__items"><a href="blog-details.html" className="header__sub--menu__link">Blog Details</a></li>
                            <li className="header__sub--menu__items"><a href="blog-left-sidebar.html" className="header__sub--menu__link">Blog Left Sidebar</a></li>
                            <li className="header__sub--menu__items"><a href="blog-right-sidebar.html" className="header__sub--menu__link">Blog Right Sidebar</a></li>
                        </ul>
                    </li>
                    <li className="header__menu--items">
                        <a className="header__menu--link " href="#">Pages <span className="menu__plus--icon">+</span></a>
                        <ul className="header__sub--menu">
                            <li className="header__sub--menu__items"><a href="about.html" className="header__sub--menu__link">About Us</a></li>
                            <li className="header__sub--menu__items"><a href="contact.html" className="header__sub--menu__link">Contact Us</a></li>
                            <li className="header__sub--menu__items"><a href="cart.html" className="header__sub--menu__link">Cart Page</a></li>
                            <li className="header__sub--menu__items"><a href="portfolio.html" className="header__sub--menu__link">Portfolio Page</a></li>
                            <li className="header__sub--menu__items"><a href="wishlist.html" className="header__sub--menu__link">Wishlist Page</a></li>
                            <li className="header__sub--menu__items"><a href="login.html" className="header__sub--menu__link">Login Page</a></li>
                            <li className="header__sub--menu__items"><a href="404.html" className="header__sub--menu__link">Error Page</a></li>
                        </ul>
                    </li>
                    <li className="header__menu--items">
                        <a className="header__menu--link" href="contact.html">Contact </a>  
                    </li>
                </ul>
            </nav>
        </div>  
    );
    
}

export default Menu