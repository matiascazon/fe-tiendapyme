export const getProductos = async () => {
    try {
        const respuesta = await fetch("http://vps-3326270-x.dattaweb.com:8055/items/producto") 
        const resultado = await respuesta.json()
        return resultado.data
    } catch (error) {
        console.log(`Erro al traer productos ,${error}`);
    }
}

export const getProducto = async (id) => {
    try {
        const respuesta = await fetch(`http://vps-3326270-x.dattaweb.com:8055/items/producto/${id}`)
       
        const resultado = await respuesta.json()
        return resultado.data
    } catch (error) {
        console.log(error)
    }
}