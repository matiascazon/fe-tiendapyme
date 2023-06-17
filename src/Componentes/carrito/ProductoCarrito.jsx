import React from 'react'
import '../../assets/css/plugins/glightbox.min.css';
import '../../assets/css/vendor/bootstrap.min.css';
import '../../assets/css/style.css';

const ProductoCarrito = () => {
  return (
    <div>
                  <div className="minicart__product">
                <div className="minicart__product--items d-flex">
                    <div className="minicart__thumbnail">
                        <a href="product-details.html"><img src="assets/img/product/product2.webp" alt="prduct-img"/></a>
                    </div>
                    <div className="minicart__text">
                        <h4 className="minicart__subtitle"><a href="product-details.html">Fresh Tomatoe is organic.</a></h4>
                        <span className="color__variant"><b>Color:</b> Green</span>
                        <div className="minicart__price">
                            <span className="current__price">$115.00</span>
                            <span className="old__price">$130.00</span>
                        </div>
                        <div className="minicart__text--footer d-flex align-items-center">
                            <div className="quantity__box minicart__quantity">
                                <button type="button" className="quantity__value decrease" aria-label="quantity value" value="Decrease Value">-</button>
                                <label>
                                    <input type="number" className="quantity__number" value="1" />
                                </label>
                                <button type="button" className="quantity__value increase" aria-label="quantity value" value="Increase Value">+</button>
                            </div>
                            <button className="minicart__product--remove" aria-label="minicart remove btn">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ProductoCarrito
