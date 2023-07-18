import React, { useContext, useEffect, useState } from 'react'
import BotonCarrito from './BotonCarrito'
import ProductoCarrito from './ProductoCarrito'
import { contextoCarrito } from '../../context/contextCarrito'
import { registrarCompra } from '../../data/compra'


const Carrito = () => {
    const[open,setOpen] = useState(false)

    const {carrito,obtenerPrecioTotal} = useContext(contextoCarrito)

    useEffect(() => { //bloquea el scroll desde el css
        if(open){
            document.body.classList.add('offCanvas__minicart_active')
        }else{
            document.body.classList.remove('offCanvas__minicart_active')
        }
    },[open])

    const menuHandler = () => {
        open ? setOpen(false) : setOpen(true)
    }
    

    const handleRegistrarCompra = () => {
        registrarCompra(carrito.map((compra) => (
            {
                ...compra,
                compra_operacion : `${compra.compra_comprador.slice(0,4)}${Date.now()}`
            }
            
        )))
    }

    return (
    <>
        <BotonCarrito
            open={open}
            setOpen={setOpen}
        />
        
        { open && <div className='bg_minicart_active' onClick={menuHandler}></div> }
        
        <div className={`offCanvas__minicart ${open ? 'active' : ''}`}>
            <div className="minicart__header ">
                <div className="minicart__header--top d-flex justify-content-between align-items-center">
                    <h3 className="minicart__title"> Carrito</h3>
                    <button className="minicart__close--btn" aria-label="minicart close btn" onClick={menuHandler}>
                        <svg className="minicart__close--icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368"/></svg>
                    </button>
                </div>
                <p className="minicart__header--desc">Productos añadidos al carrito</p>
            </div>
            <div className="minicart__product">
                {carrito.map(producto => (
                    <ProductoCarrito
                        key={producto.compra_producto}
                        producto={producto}
                    />
                ))}
            </div>
            <div className="minicart__amount">
                {/* <div className="minicart__amount_list d-flex justify-content-between">
                    <span>Sub Total:</span>
                    <span><b>$240.00</b></span>
                </div> */}
                <div className="minicart__amount_list d-flex justify-content-between">
                    <span>Total:</span>
                    <span><b> ${obtenerPrecioTotal()}</b></span>
                </div>
            </div>
            <div className="minicart__conditions text-center">
                <input className="minicart__conditions--input" id="accept" type="checkbox"/>
                <label className="minicart__conditions--label" htmlFor="accept">Estoy de acuerdo con la <a className="minicart__conditions--link" href="privacy-policy.html">Política y Privacidad</a></label>
            </div>
            <div className="minicart__button d-flex justify-content-center">
                <a className="primary__btn minicart__button--link" href="#">Ver carrito</a>
                <a className="primary__btn minicart__button--link" href="#" onClick={handleRegistrarCompra}>Comprar</a>
            </div>
        </div>
    </>
    
  )
}

export default Carrito
