import SolutionComponent from '@/components/atoms/SolutionComponent'
import DiagonalSection from '@/components/layouts/DiagonalSection'
import Footer from '@/components/molecules/Footer'
import Navbar from '@/components/molecules/Navbar'
import React from 'react'

export const Brand = () => {
  return (
    <>
      <Navbar />
      <DiagonalSection
        topColor="#fbbf24"
        bottomColor="#fbbf24"
        background="#fff"
        inverter={false}
        size="XL"
      >
        <SolutionComponent 
        brand='BGH'
        title='Aire Acondicionado BGH'
        description='En nuestra empresa, nos especializamos en ofrecer soluciones eléctricas integrales para hogares, empresas y propiedades comerciales en Argentina. Nuestro compromiso es brindar seguridad, eficiencia y confiabilidad en cada proyecto, cumpliendo con las normativas y estándares vigentes del país.'
        path='/contacto'
        image='pexels-kindelmedia-9875408.jpg'
        />
        <SolutionComponent 
        brand='BGH'
        title='Aire Acondicionado BGH'
        description='En nuestra empresa, nos especializamos en ofrecer soluciones eléctricas integrales para hogares, empresas y propiedades comerciales en Argentina. Nuestro compromiso es brindar seguridad, eficiencia y confiabilidad en cada proyecto, cumpliendo con las normativas y estándares vigentes del país.'
        path='/contacto'
        image='pexels-kindelmedia-9875408.jpg'
        />
        <SolutionComponent 
        brand='BGH'
        title='Aire Acondicionado BGH'
        description='En nuestra empresa, nos especializamos en ofrecer soluciones eléctricas integrales para hogares, empresas y propiedades comerciales en Argentina. Nuestro compromiso es brindar seguridad, eficiencia y confiabilidad en cada proyecto, cumpliendo con las normativas y estándares vigentes del país.'
        path='/contacto'
        image='pexels-kindelmedia-9875408.jpg'
        />
      </DiagonalSection>
      <Footer
      background = '#fbbf24'
      />
    </>
  )
}

export default Brand
