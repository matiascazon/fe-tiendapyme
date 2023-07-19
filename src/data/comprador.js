export const registrarComprador = async (datosComprador, setLoading, setRespuesta) => {
    try {
      const respuesta = await fetch('http://vps-3326270-x.dattaweb.com:8055/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosComprador),
      });
  
      setLoading(false);
      setRespuesta(true);
      setTimeout(() => {
        setRespuesta(false)
      }, 5000);
      const resultado = await respuesta.json();
      return resultado
    } catch (error) {
      console.log('error', error);
    }
};
  


//autenticacion de usuario comprador

import { Directus } from '@directus/sdk';

const directus = new Directus('http://vps-3326270-x.dattaweb.com:8055');

export const obtenerUsuario = async () => {
    try {
        const respuesta = await directus.users.me.read();
        console.log(respuesta)
        return respuesta
    } catch (error) {
        console.log('error', error);
    }
}