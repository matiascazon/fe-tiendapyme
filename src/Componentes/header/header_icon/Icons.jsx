import React from 'react'
import './../../../assets/css/vendor/bootstrap.min.css';
import './../../../assets/css/style.css';
import Search from './Search';
import User from './User';
import Wishlist from './Wishlist';
import Carrito from '../../carrito/Carrito';

function Icons() {
  return (
    <div className="header__account">
        <ul className="d-flex">
            <Search/>
            <User/>
            <Wishlist/>
            {/* <Cart/> */}
            <Carrito/>
        </ul>
    </div>
  )
}

export default Icons
