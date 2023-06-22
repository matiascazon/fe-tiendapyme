import React, { useEffect, useState } from 'react'
import BotonMenuMobile from './BotonMenuMobile'
import { Link } from 'react-router-dom';

const MenuMobile = () => {
    const [open,setOpen] = useState(false)
    // useEffect(() => { //bloquea el scroll desde el css
    //     if(open){
    //         document.body.classList.add('mobile_menu_open')
    //     }else{
    //         document.body.classList.remove('mobile_menu_open')
    //     }
    // },[open])
   return (

    <>
        <BotonMenuMobile
            open={open}
            setOpen={setOpen}
        />
        { open && <div className='bg_menu_active' onClick={() => {open ? setOpen(false) : setOpen(true)}}></div> }

        <div className={`offcanvas__header ${open ? 'open' : '' }`}>
            <div className="offcanvas__inner">
                <div className="offcanvas__logo">
                    <a className="offcanvas__logo_link" href="index.html">
                        <img src="assets/img/logo/nav-log.webp" alt="TiendaPyme Logo"/>
                    </a>
                    <button className="offcanvas__close--btn" aria-label="offcanvas close btn" onClick={() => {open ? setOpen(false) : setOpen(true)}}>close</button>
                </div>
                <nav className="offcanvas__menu">
                    <ul className="offcanvas__menu_ul">
                        <li className="offcanvas__menu_li">
                            <Link className="offcanvas__menu_item" to={`/`} onClick={() => {setOpen(false)}}>Inicio</Link>
                            
                        </li>
                        <li className="offcanvas__menu_li">
                            <a className="offcanvas__menu_item" href="/" onClick={() => {setOpen(false)}}>Tiendas</a>
                            
                        </li>
                        <li className="offcanvas__menu_li">
                            <a className="offcanvas__menu_item" href="/" onClick={() => {setOpen(false)}}>Productos</a>
                        </li>
                        <li className="offcanvas__menu_li"><a className="offcanvas__menu_item" href="/" onClick={() => {setOpen(false)}}>Nosotros</a></li>
                        <li className="offcanvas__menu_li"><a className="offcanvas__menu_item" href="/" onClick={() => {setOpen(false)}}>Contáctanos</a></li>
                    </ul>
                    <div className="offcanvas__account--items">
                        <Link className="offcanvas__account--items__btn d-flex align-items-center" to={`/login`} onClick={() => {setOpen(false)}}>
                        <span className="offcanvas__account--items__icon"> 
                            <svg xmlns="http://www.w3.org/2000/svg"  width="20.51" height="19.443" viewBox="0 0 512 512"><path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/></svg> 
                            </span>
                        <span className="offcanvas__account--items__label">Iniciar Sesión / Registrarse</span>
                        </Link>
                    </div>

                </nav>
            </div>
        </div>
    </>
  )
}

export default MenuMobile
