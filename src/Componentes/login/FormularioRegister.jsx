import React from 'react'

const FormularioRegister = () => {
  return (
    <div className="col">
        <div className="account__login register">
            <div className="account__login--header mb-25">
                <h3 className="account__login--header__title mb-10">Registrarse</h3>
                {/* <p className="account__login--header__desc">Register here if you are a new customer</p> */}
            </div>
            <div className="account__login--inner">
                <label>
                    <input className="account__login--input" placeholder="Nombre" type="text"/>
                </label>
                <label>
                    <input className="account__login--input" placeholder="Correo electrónico" type="email"/>
                </label>
                <label>
                    <input className="account__login--input" placeholder="Contraseña" type="password"/>
                </label>
                <label>
                    <input className="account__login--input" placeholder="Confirmar Contraseña" type="password"/>
                </label>
                <label>
                    <button className="account__login--btn primary__btn mb-10" type="submit">Registrarme</button>
                </label>
                <div className="account__login--remember position__relative">
                    <input className="checkout__checkbox--input" id="check2" type="checkbox"/>
                    <span className="checkout__checkbox--checkmark"></span>
                    <label className="checkout__checkbox--label login__remember--label" for="check2">
                        He leído y acepto los términos y condiciones.
                    </label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormularioRegister
