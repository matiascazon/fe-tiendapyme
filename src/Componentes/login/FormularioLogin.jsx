import React from 'react'
import { Link} from 'react-router-dom';
import useForm from '../../hooks/useForm'
const FormularioLogin = () => {

    const formInicial = {
        comprador_email : '',
        comprador_pass : ''
    }

    const validarForm = (form) => {
        let errores = {}
        const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
        //validacion email
        if(!form.comprador_email.trim()){
            errores.comprador_email = "El campo 'Correo electrónico' es requerido"
        }else if(!regexEmail.test(form.comprador_email.trim())){
            errores.comprador_email = "El campo 'Correo elctrónico' no tiene el formato adecuado"
        }

        //validacion password
        if(!form.comprador_pass.trim()){
            errores.comprador_pass = "El campo 'Contraseña' es requerido"
        }else if(!regexPass.test(form.comprador_pass)){
            errores.comprador_pass = "La contraseña debe tener al menos 8 caracteres, una letra mínuscula, una letra mayúscula y un número"
        }
        return errores
        
    }

    const handleSubmit = (e) => { //handleSubmit para el login de usuario Comprador
        e.preventDefault()
        
        setErrores(validarForm(form))
        
        if(Object.keys(errores).length === 0){
            //registrarComprador(form,setLoading,setRespuesta)
            //loginComprador()
            alert('Login')
            setForm(formInicial)
        }else{
            alert('Hubo un error')
        }
    }

    const { form, errores, loading, respuesta, handleChange, handleBlur, setErrores,setLoading,setRespuesta,setForm  } = useForm(formInicial,validarForm)

        

  return (
    <div className="col">
        <form method='post' className="account__login" onSubmit={handleSubmit}>
            <div className="account__login--header mb-25">
                <h3 className="account__login--header__title mb-10">Iniciar Sesión</h3>
                {/* <p className="account__login--header__desc">Login if you area a returning customer.</p> */}
            </div>
            <div className="account__login--inner">
                <label>
                    <input className="account__login--input" placeholder="Correo electrónico" type="email" name="comprador_email" id="comprador_email"
                        // value={form.comprador_email} 
                        onChange={handleChange} 
                        onBlur={handleBlur}
                    />
                </label>
                {errores.comprador_email && <p>{errores.comprador_email}</p>}

                <label>
                    <input className="account__login--input" placeholder="Contraseña" type="password" name="comprador_pass" id="comprador_pass"
                        // value={form.comprador_pass} 
                        onChange={handleChange} 
                        onBlur={handleBlur}                        
                    />
                </label>
                {errores.comprador_pass && <p>{errores.comprador_pass}</p>}

                <div className="account__login--remember__forgot mb-15 d-flex justify-content-between align-items-center">
                    <div className="account__login--remember position__relative">
                        <input className="checkout__checkbox--input" id="check1" type="checkbox"/>
                        <span className="checkout__checkbox--checkmark"></span>
                        <label className="checkout__checkbox--label login__remember--label" for="check1">
                            Recordarme</label>
                    </div>
                    <button className="account__login--forgot" type="submit">¿Olvidaste tu contraseña?</button>
                </div>
                <button className="account__login--btn primary__btn" type="submit">Iniciar Sesión</button>
                <div className="account__social d-flex justify-content-center mb-15">
                    {/* <a className="account__social--link facebook" target="_blank" href="https://www.facebook.com">Facebook</a> */}
                    {/* <a className="account__social--link google" target="_blank" href="https://www.google.com">Google</a> */}
                    {/* <a className="account__social--link twitter" target="_blank" href="https://twitter.com">Twitter</a> */}
                </div>
                <p className="account__login--signup__text">¿No estás registrado?<Link to="/registro">{' '}Registrate</Link></p>
            </div>
        </form>
    </div>
  )
}

export default FormularioLogin
