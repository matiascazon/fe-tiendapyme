import React from 'react'
import '../../assets/css/plugins/swiper-bundle.min.css';
import '../../assets/css/plugins/glightbox.min.css';
import '../../assets/css/vendor/bootstrap.min.css';
import '../../assets/css/style.css';

function Footer_col_4() {
  return (
    <div className="col-lg-3 col-md-6">
                        <div className="footer__widget">
                            <h2 className="footer__widget--title ">Newsletter <button className="footer__widget--button" aria-label="footer widget button"></button>
                                <svg className="footer__widget--title__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394" viewBox="0 0 10.355 6.394">
                                    <path  d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor"></path>
                                </svg>
                            </h2>
                            <div className="footer__newsletter footer__widget--inner">
                                <p className="footer__newsletter--desc">Get updates by subscribe our
                                    weekly newsletter</p>
                                <form className="newsletter__subscribe--form__style position__relative" action="#">
                                    <label>
                                        <input className="footer__newsletter--input newsletter__subscribe--input" placeholder="Enter your email address" type="email"/>
                                    </label>
                                    <button className="footer__newsletter--button newsletter__subscribe--button primary__btn" type="submit">Subscribe
                                        <svg className="newsletter__subscribe--button__icon" xmlns="http://www.w3.org/2000/svg" width="9.159" height="7.85" viewBox="0 0 9.159 7.85">
                                            <path  data-name="Icon material-send" d="M3,12.35l9.154-3.925L3,4.5,3,7.553l6.542.872L3,9.3Z" transform="translate(-3 -4.5)" fill="currentColor"/>
                                        </svg>
                                    </button>
                                </form> 
                            </div>
                        </div>
    </div>
  )
}

export default Footer_col_4
