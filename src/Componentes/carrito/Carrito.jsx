import React, { useContext, useState } from 'react'
import BotonCarrito from './BotonCarrito'
import ProductoCarrito from './ProductoCarrito'
import { contextoCarrito } from '../../context/contextCarrito'


const Carrito = () => {
    const[open,setOpen] = useState(false)

    const {carrito,obtenerPrecioTotal} = useContext(contextoCarrito)
    return (
    <>
        <BotonCarrito
            open={open}
            setOpen={setOpen}
        />

        <div className={`offCanvas__minicart ${open ? 'active' : ''}`}>
            <div className="minicart__header ">
                <div className="minicart__header--top d-flex justify-content-between align-items-center">
                    <h3 className="minicart__title"> Carrito</h3>
                    <button className="minicart__close--btn" aria-label="minicart close btn" onClick={() => {open ? setOpen(false) : setOpen(true)}}>
                        <svg className="minicart__close--icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368"/></svg>
                    </button>
                </div>
                <p className="minicart__header--desc">Productos añadidos al carrito</p>
            </div>
            <div className="minicart__product">
                {carrito.map(producto => (
                    <ProductoCarrito
                        key={producto.id}
                        producto={producto}
                    />
                ))}
            </div>
            <div className="minicart__amount">
                {/* <div className="minicart__amount_list d-flex justify-content-between">
                    <span>Sub Total:</span>
                    <span><b>$240.00</b></span>
                </div> */}
                <div className="minicart__amount_list d-flex justify-content-between" onClick={obtenerPrecioTotal}>
                    <span>Total:</span>
                    <span><b></b></span>
                </div>
            </div>
            <div className="minicart__conditions text-center">
                <input className="minicart__conditions--input" id="accept" type="checkbox"/>
                <label className="minicart__conditions--label" htmlFor="accept">I agree with the <a className="minicart__conditions--link" href="privacy-policy.html">Privacy And Policy</a></label>
            </div>
            <div className="minicart__button d-flex justify-content-center">
                <a className="primary__btn minicart__button--link" href="#">View cart</a>
                <a className="primary__btn minicart__button--link" href="#">Checkout</a>
            </div>
        </div>
    </>
    
  )
}

export default Carrito
