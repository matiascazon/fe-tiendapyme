import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { registrarComprador } from '../../data/comprador'

const FormularioRegister = () => {
    const formInicial = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        comprador_celular: '',
        comprador_dni: '',
        role: '844cde7f-c493-42a0-bb93-ce3cd5908712'
    }
    
    const validarForm = (form) => {//validaciones
        let errores = {}
        const regexNyA = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        const regexNum = /^[0-9]+$/;
        const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
        
        //campo nombre
        if(!form.first_name.trim()){
            errores.first_name = "El campo 'Nombre' es requerido"
        }else if(!regexNyA.test(form.first_name.trim())){
            errores.first_name = "El campo 'Nombre' solo acepta letras y espacios en blanco"
        }
        
        //campo apellido
        if(!form.last_name.trim()){
            errores.last_name = "El campo 'Apellido' es requerido"
        }else if(!regexNyA.test(form.last_name.trim())){
            errores.last_name = "El campo 'Apellido' solo acepta letras y espacios en blanco"
        }
        
        //campo email
        if(!form.email.trim()){
            errores.email = "El campo 'Correo electrónico' es requerido"
        }else if(!regexEmail.test(form.email.trim())){
            errores.email = "El campo 'Correo elctrónico' no tiene el formato adecuado"
        }
        
        //campo dni
        if(!form.comprador_dni.trim()){
            errores.comprador_dni = "El campo 'Dni' es requerido"
        }else if(!regexNum.test(form.comprador_dni.trim())){
            errores.comprador_dni = "El campo 'Dni' solo requiere números"
        }else if(form.comprador_dni.trim().length < 7 || form.comprador_dni.trim().length > 8){
            errores.comprador_dni = "Verifique la cantidad de digitos del campo 'Dni'"
        }
        
        //campo celular
        if(!form.comprador_celular.trim()){
            errores.comprador_celular = "El campo 'N° de Celular' es requerido"
        }else if(!regexNum.test(form.comprador_celular.trim())){
            errores.comprador_celular = "El campo 'N° de Celular' solo requiere números"
        }
        
        //campo contraseña
        if(!form.password.trim()){
            errores.password = "El campo 'Contraseña' es requerido"
        }else if(!regexPass.test(form.password)){
            errores.password = "La contraseña debe tener al menos 8 caracteres, una letra mínuscula, una letra mayúscula y un número"
            
        }
        return errores
    }
    
    
    const handleSubmit = (e) => { //handleSubmit propio del formulario de registro
        e.preventDefault()
        
        setErrores(validarForm(form))
        
        if(Object.keys(errores).length === 0){
            registrarComprador(form,setLoading,setRespuesta)
            setForm(formInicial)
        }else{
            alert('Hubo un error')
        }
    }
    
    const { form, errores, loading, respuesta, handleChange, handleBlur, setErrores, setLoading, setRespuesta, setForm} = useForm(formInicial,validarForm)
    
  return (
    <div className="col align-self-start">
        <div className="account__login register">
            <div className="account__login--header mb-25">
                <h3 className="account__login--header__title mb-10">Registrarse</h3>
                {/* <p className="account__login--header__desc">Register here if you are a new customer</p> */}
            </div>
            <form className="account__login--inner" onSubmit={handleSubmit} method='post'>
                <label>
                    <input className="account__login--input" placeholder="Nombre" type="text" name="first_name" id='first_name'
                        value={form.first_name} 
                        onChange={handleChange} 
                        onBlur={handleBlur}
                    />
                </label>
                {errores.fist_name && <p>{errores.fist_name}</p>}
                <label>
                    <input className="account__login--input" placeholder="Apellido" type="text" name='last_name' id='last_name'
                        value={form.last_name} 
                        onChange={handleChange} 
                        onBlur={handleBlur}
                    />
                </label>
                {errores.last_name && <p>{errores.last_name}</p>}
                <label>
                    <input className="account__login--input" placeholder="Dni" type="text" name='comprador_dni' minLength={7} maxLength={8} id='comprador_dni'
                        value={form.comprador_dni} 
                        onChange={handleChange} 
                        onBlur={handleBlur}
                    />
                </label>
                {errores.comprador_dni && <p>{errores.comprador_dni}</p>}
                <label>
                    <input className="account__login--input" placeholder="N° de Celular ej.: 3884123456" type="text" name='comprador_celular' maxLength={10} id='comprador_celular'
                        value={form.comprador_celular} 
                        onChange={handleChange} 
                        onBlur={handleBlur}
                    />
                </label>
                {errores.comprador_celular && <p>{errores.comprador_celular}</p>}
                <label>
                    <input className="account__login--input" placeholder="Correo electrónico" type="email" name='email' id='email'
                        value={form.email} 
                        onChange={handleChange} 
                        onBlur={handleBlur}
                    />
                </label>
                {errores.email && <p>{errores.email}</p>}
                <label>
                    <input className="account__login--input" placeholder="Contraseña" type="password" name='password' minLegth={8} id='password'
                        value={form.password} 
                        onChange={handleChange} 
                        onBlur={handleBlur}
                    />
                </label>
                {errores.password && <p>{errores.password}</p>}
                <button className="account__login--btn primary__btn mb-10" type="submit">Registrarse</button>
                <p className="account__login--signup__text">Ya tenés una cuenta? <br /> <Link to="/login">Inicia Sesion</Link></p>

                {/* <div className="account__login--remember position__relative">
                    <input className="checkout__checkbox--input" id="check2" type="checkbox"/>
                    <span className="checkout__checkbox--checkmark"></span>
                    <label className="checkout__checkbox--label login__remember--label" for="check2">
                        He leído y acepto los términos y condiciones.
                    </label>
                </div> */}
            </form>
            {loading && 
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            }
            
            {respuesta && <p className='text-center h4'>Usuario Registrado!</p>}

        </div>
    </div>
  )
}

export default FormularioRegister


    // const handlerSubmit = (e) => {
    //     e.preventDefault()
    //     //validaciones
    //     if(Object.values(user).includes())
    //     if(Object.values(user) !== 0){
    //         fetch('http://vps-3326270-x.dattaweb.com:8055/flows/trigger/60b0ab04-7e80-407a-b8f3-8422fb347886',{
    //            method: 'POST',
    //            headers: {
    //             'Content-Type' : 'application/json',
    //            },
    //            body: JSON.stringify(user)
    //         })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log('registrado',data)
    //         })
    //         .catch((error) => {
    //             console.log('error',error)
    //         })
    //     }
    // }