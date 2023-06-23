import React from 'react'

const BotonMenuMobile = ({open,setOpen}) => {
  return (
    <div className="offcanvas__header--menu__open">
        <a className="offcanvas__header--menu__open--btn" onClick={() => {open ? setOpen(false) : setOpen(true)}}>
            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon offcanvas__header--menu__open--svg" viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M80 160h352M80 256h352M80 352h352"/></svg>
            <span className="visually-hidden">Offcanvas Menu Open</span>
        </a>
    </div>
  )
}

export default BotonMenuMobile
