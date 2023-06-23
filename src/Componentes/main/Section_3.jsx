import React from 'react'
import '../../assets/css/plugins/swiper-bundle.min.css';
import '../../assets/css/plugins/glightbox.min.css';
import '../../assets/css/vendor/bootstrap.min.css';
import '../../assets/css/style.css';
import CartaProducto from '../CartaProducto';

const Section_3 = ({productos}) => {

  return (
    <section className="product__section section--padding pt-0">
        <div className="container-fluid">
            <div className="section__heading text-center mb-30">
                <h2 className="section__heading--maintitle">Productos Populares</h2>
            </div>
            <div className="tab_content">
                <div id="chair" className="tab_pane active show">
                    <div className="product__section--inner">
                        <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 mb--n30">
                            {productos.map((producto) => (
                                <CartaProducto
                                    key={producto.id}
                                    producto={producto}
                                />
                            ))}
                            {productos.map((producto) => (
                                <CartaProducto
                                    key={producto.id}
                                    producto={producto}
                                />
                            ))}
                            {productos.map((producto) => (
                                <CartaProducto
                                    key={producto.id}
                                    producto={producto}
                                />
                            ))}
                            {productos.map((producto) => (
                                <CartaProducto
                                    key={producto.id}
                                    producto={producto}
                                />
                            ))}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>    
  )
}

export default Section_3
