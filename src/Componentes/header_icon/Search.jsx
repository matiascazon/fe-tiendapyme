import React from 'react'
import './../../assets/css/plugins/swiper-bundle.min.css';
import './../../assets/css/plugins/glightbox.min.css';
import './../../assets/css/vendor/bootstrap.min.css';
import './../../assets/css/style.css';

function Search() {
  return (
    <li className="header__account--items  header__account--search__items ">
        <a className="header__account--btn search__open--btn" href="javascript:void(0)">
            <svg className="header__search--button__svg" xmlns="http://www.w3.org/2000/svg" width="26.51" height="23.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"/></svg>  
            <span className="visually-hidden">Search</span>
        </a>
    </li>
  )
}

export default Search
