import React, { useState } from 'react'

const useForm = (formInicial,validarForm) => {
    const [form,setForm] = useState(formInicial)
    const [errores,setErrores] = useState({})
    const [loading,setLoading] = useState(false)
    const [respuesta,setRespuesta] = useState(null)
    

    const handleChange = (e) => { //cambio del estado del formulario
        const {name,value} = e.target 

        setForm((prevForm) => ({
            ...prevForm,
            [name] : value
        }))
    }

    const handleBlur = (e) => { //validaciones al perder el foco del input
        handleChange(e)

        setErrores(validarForm(form))
    }

    return {
        form,
        errores,
        loading,
        respuesta,
        handleChange,
        handleBlur,
        setErrores,
        setLoading,
        setRespuesta,
        setForm
    }
}

export default useForm
