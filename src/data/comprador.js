export const registrarComprador = async (datosComprador, setLoading, setRespuesta) => {
    try {
      const respuesta = await fetch('http://vps-3326270-x.dattaweb.com:8055/items/Comprador', {
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
  