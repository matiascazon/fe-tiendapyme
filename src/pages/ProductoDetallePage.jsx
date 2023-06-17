import React from 'react'
import ProductoDetalle from '../Componentes/producto_detalle/ProductoDetalle'
import ProductoDetalleDescripcion from '../Componentes/producto_detalle/ProductoDetalleDescripcion';
import ProductoSlider from '../Componentes/producto_detalle/ProductoSlider';




const ProductoDetallePage = () => {
  return (
    <div>
        <ProductoDetalle/>  
        <ProductoDetalleDescripcion/> 
        <ProductoSlider/>
    </div>
  )
}

export default ProductoDetallePage
