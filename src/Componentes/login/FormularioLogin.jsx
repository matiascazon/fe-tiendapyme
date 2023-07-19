import React, { useContext } from 'react'
import { Link} from 'react-router-dom';
import useForm from '../../hooks/useForm'
import { AuthContext } from '../../auth/auth';


const FormularioLogin = () => {
    
    const formInicial = {
        email : '',
        password : ''
    }

    const validarForm = (form) => {
        let errores = {}
        const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
        //validacion email
        if(!form.email.trim()){
            errores.email = "El campo 'Correo electrónico' es requerido"
        }else if(!regexEmail.test(form.email.trim())){
            errores.email = "El campo 'Correo elctrónico' no tiene el formato adecuado"
        }

        //validacion password
        if(!form.password.trim()){
            errores.password = "El campo 'Contraseña' es requerido"
        }else if(!regexPass.test(form.password)){
            errores.password = "La contraseña debe tener al menos 8 caracteres, una letra mínuscula, una letra mayúscula y un número"
        }
        return errores
        
    }

    const handleSubmit = (e) => { //handleSubmit para el login de usuario Comprador
        e.preventDefault()
        
        setErrores(validarForm(form))
        
        if(Object.keys(errores).length === 0){
            // registrarComprador(form,setLoading,setRespuesta)
            login(form)
            console.log(form.email)
            console.log(form.password)
            setForm(formInicial)
        }else{
            alert('Hubo un error')
        }
    }

    const { form, errores, loading, respuesta, handleChange, handleBlur, setErrores,setLoading,setRespuesta,setForm  } = useForm(formInicial,validarForm)
    
    //autenticacion de usuario
    const { isAuthenticated, user, login, logout, getToken } = useContext(AuthContext)
        



  return (
    <div className="col">
        <form method='post' className="account__login" onSubmit={handleSubmit}>
            <div className="account__login--header mb-25">
                <h3 className="account__login--header__title mb-10">Iniciar Sesión</h3>
                {/* <p className="account__login--header__desc">Login if you area a returning customer.</p> */}
            </div>
            <div className="account__login--inner">
                <label>
                    <input className="account__login--input" placeholder="Correo electrónico" type="email" name="email" id="email"
                        // value={form.comprador_email} 
                        onChange={handleChange} 
                        onBlur={handleBlur}
                    />
                </label>
                {errores.email && <p>{errores.email}</p>}

                <label>
                    <input className="account__login--input" placeholder="Contraseña" type="password" name="password" id="password"
                        // value={form.comprador_pass} 
                        onChange={handleChange} 
                        onBlur={handleBlur}                        
                    />
                </label>
                {errores.password && <p>{errores.password}</p>}

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
                <p className="account__login--signup__text">¿No estás registrado?<br /><Link to="/registro">Registrate</Link></p>
            </div>
        </form>
    </div>
  )
}

export default FormularioLogin
