import React, { useEffect } from 'react'
import Section_1 from '../Componentes/main/Section_1'
import Section_2 from '../Componentes/main/Section_2'
import Section_3 from '../Componentes/main/Section_3';
import Section_4 from '../Componentes/main/Section_4';
import Section_5 from '../Componentes/main/Section_5';
import '../assets/css/plugins/swiper-bundle.min.css';
import '../assets/css/plugins/glightbox.min.css';
import '../assets/css/vendor/bootstrap.min.css';
import '../assets/css/style.css';
import { getProductos } from '../data/producto';
import { useLoaderData } from 'react-router-dom';

export const loader = () => {
  const productos = getProductos()
  return productos
}

const Index = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  const productos = useLoaderData()
  const productosPrincipal = productos.filter(producto => producto.producto_posicion === 'principal')
  const productosBanner = productos.filter(producto => producto.producto_posicion === 'banner')
  return (
    <main className="main__content_wrapper">
        <Section_1></Section_1>
        <Section_2
          productos={productosBanner}
        ></Section_2>
        <Section_3
          productos={productosPrincipal}
        ></Section_3>
        <Section_4></Section_4>
        <Section_5
          productos={productos}
        ></Section_5>
    </main>
  )
}

export default Index
