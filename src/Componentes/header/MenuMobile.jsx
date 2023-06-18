import React, { useState } from 'react'
import BotonMenuMobile from './BotonMenuMobile'

const MenuMobile = () => {
    const [open,setOpen] = useState(false)

   return (

    <>
        <BotonMenuMobile
            open={open}
            setOpen={setOpen}
        />

        <div className={`offcanvas__header ${open ? 'open' : '' }`}>
            <div className="offcanvas__inner">
                <div className="offcanvas__logo">
                    <a className="offcanvas__logo_link" href="index.html">
                        <img src="assets/img/logo/nav-log.webp" alt="Furea Logo"/>
                    </a>
                    <button className="offcanvas__close--btn" aria-label="offcanvas close btn" onClick={() => {open ? setOpen(false) : setOpen(true)}}>close</button>
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
        </div>
    </>
  )
}

export default MenuMobile
