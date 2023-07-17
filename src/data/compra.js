export const registrarCompra = (datosCompra) => {
    fetch('http://vps-3326270-x.dattaweb.com:8055/items/Compra',{
            method: 'POST',
            headers: {
            'Content-Type' : 'application/json',
            },
            body: JSON.stringify(datosCompra)
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('enviado',data)
        })
        .catch((error) => {
            console.log('error',error)
        })
}
 
//http://vps-3326270-x.dattaweb.com:8055/flows/trigger/c885f271-267b-4832-a382-e593b5cf040a