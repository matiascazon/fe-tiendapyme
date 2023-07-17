import React from 'react'
import '../../assets/css/plugins/swiper-bundle.min.css';
import '../../assets/css/plugins/glightbox.min.css';
import '../../assets/css/vendor/bootstrap.min.css';
import '../../assets/css/style.css';
import CartaProductoBanner from '../CartaProductoBanner';

const Section_2 = ({productos}) => {
  return (
    <section className="banner__section section--padding">
        <div className="container-fluid">
            <div className="row mb--n28">
                {productos.map(producto => (
                    <CartaProductoBanner
                        key={producto.id}
                        producto={producto}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Section_2
