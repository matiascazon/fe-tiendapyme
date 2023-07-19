import React, { createContext, useState, useContext, useEffect } from "react"
import { Directus } from '@directus/sdk'

const directus = new Directus('http://vps-3326270-x.dattaweb.com:8055')


export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const[isAuthenticated,setIsAuthenticated] = useState(false)
  // const isAuthenticated = !!user //convierte el valor de user en booleano

  useEffect(() => {
    async function loadUserFromDirectus() {
      const token = await directus.auth.token;
      if (token) {
        const usuarioActual = await directus.users.me.read();
        setUser(usuarioActual);
        setIsAuthenticated(true); // Establecer el estado de autenticación a true si hay un token válido
      }
      setLoading(false);
    }
    setLoading(true);
    loadUserFromDirectus();
  }, []);

  const login = async ({ email, password }) => {
    setLoading(true);
    // let authenticated;
    const res = await directus.auth //login con sdk
      .login({ //envio de credenciales
        email: email,
        password: password,
      })
      .then(() => { //esdtado de usuario autenticado
        setIsAuthenticated(true)
        // console.log(isAuthenticated)
      })
      .catch((error) => {
        console.log(error)
        return error
      })

    if (res?.errors?.length > 0) return res; //retorna res en caso de que la respuesta contenga errores

    const usuarioActual = await directus.users.me.read(); //obtener el usuario actual
    setUser(usuarioActual); //setea el estado del usuario actual
    setLoading(false)
  }

  const logout = async () => {
    await directus.auth.logout()
    setUser(null)
  }

  const refreshToken = async () => {
    const res = await directus.auth.refresh()
    .then(() => {
      setIsAuthenticated(true)
    })
    .catch((error) => {
      console.log("error:",error)
      setIsAuthenticated(false)
      return error
    })

    if (res?.errors?.length > 0) return res;

    const usuarioActual = await directus.users.me.read();
    setUser(usuarioActual);


    
    // await directus.auth.refreshIfExpired().catch((error) => {
    //   setUser(null)
    // });
    // const token = await directus.auth.token
    // if (token) {
    //   return token
    // }
    // setUser(null)
    // return null
  }


  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, loading, logout, refreshToken }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider