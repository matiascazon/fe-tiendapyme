export const getProductos = async () => {
    const respuesta = await fetch("http://vps-3326270-x.dattaweb.com:8055/items/producto") 
    const resultado = await respuesta.json()
    return resultado.data
}