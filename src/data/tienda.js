export const obtenerTienda = async (tienda_id) => {
    try {
        const respuesta = await fetch(`http://vps-3326270-x.dattaweb.com:8055/items/tienda/${tienda_id}`)
        const resultado = await respuesta.json()
        return resultado.data
    } catch (error) {
        console.log(error)
    }

}