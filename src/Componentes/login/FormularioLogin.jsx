import React from 'react'

const FormularioLogin = () => {
  return (
    <div className="col">
        <div className="account__login">
            <div className="account__login--header mb-25">
                <h3 className="account__login--header__title mb-10">Login</h3>
                <p className="account__login--header__desc">Login if you area a returning customer.</p>
            </div>
            <div className="account__login--inner">
                <label>
                    <input className="account__login--input" placeholder="Email Addres" type="email"/>
                </label>
                <label>
                    <input className="account__login--input" placeholder="Password" type="password"/>
                </label>
                <div className="account__login--remember__forgot mb-15 d-flex justify-content-between align-items-center">
                    <div className="account__login--remember position__relative">
                        <input className="checkout__checkbox--input" id="check1" type="checkbox"/>
                        <span className="checkout__checkbox--checkmark"></span>
                        <label className="checkout__checkbox--label login__remember--label" for="check1">
                            Remember me</label>
                    </div>
                    <button className="account__login--forgot" type="submit">Forgot Your Password?</button>
                </div>
                <button className="account__login--btn primary__btn" type="submit">Login</button>
                <div className="account__login--divide">
                    <span className="account__login--divide__text">OR</span>
                </div>
                <div className="account__social d-flex justify-content-center mb-15">
                    <a className="account__social--link facebook" target="_blank" href="https://www.facebook.com">Facebook</a>
                    <a className="account__social--link google" target="_blank" href="https://www.google.com">Google</a>
                    <a className="account__social--link twitter" target="_blank" href="https://twitter.com">Twitter</a>
                </div>
                <p className="account__login--signup__text">Don,t Have an Account? <button type="submit">Sign up now</button></p>
            </div>
        </div>
    </div>
  )
}

export default FormularioLogin
