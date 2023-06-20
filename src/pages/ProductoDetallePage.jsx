import React from 'react'
import ProductoDetalle from '../Componentes/producto_detalle/ProductoDetalle'
import ProductoDetalleDescripcion from '../Componentes/producto_detalle/ProductoDetalleDescripcion';
import ProductoSlider from '../Componentes/producto_detalle/ProductoSlider';
import { useLoaderData, useParams } from 'react-router-dom';
import { getProducto } from '../data/producto';

  export const loader = ({params}) => {
    const producto = getProducto(params.productoId)
    return producto
  }
  
  
  const ProductoDetallePage = () => {
    const producto = useLoaderData()
  return (
    <div>
        <ProductoDetalle
          producto={producto}
        />  
        <ProductoDetalleDescripcion/> 
        {/* <ProductoSlider/> */}
    </div>
  )
}

export default ProductoDetallePage
