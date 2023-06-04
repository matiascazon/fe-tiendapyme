import React from 'react'
import Section_1 from '../Componentes/main/Section_1'
import Section_2 from '../Componentes/main/Section_2'
import Section_3 from '../Componentes/main/Section_3';
import Section_4 from '../Componentes/main/Section_4';
import Section_5 from '../Componentes/main/Section_5';
import Section_6 from '../Componentes/main/Section_6';
import '../assets/css/plugins/swiper-bundle.min.css';
import '../assets/css/plugins/glightbox.min.css';
import '../assets/css/vendor/bootstrap.min.css';
import '../assets/css/style.css';

const Index = () => {
  return (
    <main class="main__content_wrapper">
        <Section_1></Section_1>
        <Section_2></Section_2>
        <Section_3></Section_3>
        <Section_4></Section_4>
        <Section_5></Section_5>
        <Section_6></Section_6>
    </main>
  )
}

export default Index
