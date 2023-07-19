import { Directus } from '@directus/sdk';

const directus = new Directus('http://vps-3326270-x.dattaweb.com:8055'); // Reemplaza con la URL de tu servidor Directus

export const registrarCompra = async (datosCompra) => {
  try {
    // Verificar si el usuario tiene el rol de "comprador"
    const userInfo = await directus.users.me.read();
    console.log(userInfo)
    const t = localStorage.getItem('auth_token')
    // if (!tieneRolComprador) {
    //   console.log('El usuario no tiene permisos para registrar compras.');
    //   return;
    // }

    // Realizar la inserción en la colección "Compra"
    const response = await directus.items('Compra').createMany(datosCompra, { t });
    console.log('Compra registrada:', response.data);
  } catch (error) {
    console.error('Error al registrar compra:', error);
  }
};

// export const registrarCompra = (datosCompra,token) => {
//     fetch('http://vps-3326270-x.dattaweb.com:8055/items/Compra',{
//             method: 'POST',
//             headers: {
//             'Content-Type' : 'application/json',
//             Authorization: `Bearer ${token}`,
//             },
//             body: JSON.stringify(datosCompra)
//         })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log('enviado',data)
//         })
//         .catch((error) => {
//             console.log('error',error)
//         })
// }
 
//http://vps-3326270-x.dattaweb.com:8055/flows/trigger/c885f271-267b-4832-a382-e593b5cf040a