import React, { useContext } from 'react'
import '../../assets/css/vendor/bootstrap.min.css';
import '../../assets/css/style.css';
import { contextoCarrito } from '../../context/contextCarrito';

const ProductoCarrito = ({producto}) => {
    const {incrementarCantidad,decrementarCantidad,eliminarProducto} = useContext(contextoCarrito)
    const incrementarCantidadHandler = () => {
        // console.log(producto.cantidad)
        incrementarCantidad(producto.id)
        
    }
    const decrementarCantidadHandler = () => {
        decrementarCantidad(producto.id)
    }
    const eliminarProductoHandler = () => {
        eliminarProducto(producto.id)
    }

  return (
    <div className="minicart__product">
        <div className="minicart__product--items d-flex">
            <div className="minicart__thumbnail">
                <a href="product-details.html"><img src={`http://vps-3326270-x.dattaweb.com:8055/assets/${producto.imagen}`} alt="prduct-img"/></a>
            </div>
            <div className="minicart__text">
                <h4 className="minicart__subtitle"><a href="product-details.html">{producto.nombre}</a></h4>
                {/* <span className="color__variant"><b>Color:</b> Green</span> */}
                <div className="minicart__price">
                    <span className="current__price">{`$${producto.precio}`}</span>
                    {/* <span className="old__price">$130.00</span> */}
                </div>
                <div className="minicart__text--footer d-flex align-items-center">
                    <div className="quantity__box minicart__quantity">
                        <button type="button" className="quantity__value" aria-label="quantity value" onClick={decrementarCantidadHandler}>-</button>
                           <input type="number" className="quantity__number" value={producto.cantidad}  />
                        <button type="button" className="quantity__value" onClick={incrementarCantidadHandler}>+</button>
                    </div>
                    <button className="minicart__product--remove" aria-label="minicart remove btn" onClick={eliminarProductoHandler}>Eliminar</button>
                </div>
            </div>
        </div>
    </div>

  )
}

export default ProductoCarrito
