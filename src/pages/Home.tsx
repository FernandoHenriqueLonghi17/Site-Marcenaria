import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';

const Home = () => {
  const carouselImages = [
    {
      url: 'https://images.unsplash.com/photo-1611145434336-2c05a1bf7b47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      alt: 'Marcenaria 1'
    },
    {
      url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      alt: 'Ambiente Planejado 2'
    },
    {
      url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      alt: 'Ambiente Planejado 3'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Seção de Carrossel */}
      <Carousel images={carouselImages} />

      {/* Seção de Qualidades */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <img
              src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="Qualidade"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2 text-yellow-600">Qualidade Premium</h3>
            <p className="text-gray-600">Utilizamos os melhores materiais e técnicas de fabricação</p>
          </div>
          <div className="text-center p-6">
            <img
              src="https://images.unsplash.com/photo-1580137189272-c9379f8864fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="Personalização"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2 text-yellow-600">Projetos Personalizados</h3>
            <p className="text-gray-600">Criamos ambientes únicos para seu espaço</p>
          </div>
          <div className="text-center p-6">
            <img
              src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="Experiência"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2 text-yellow-600">20+ Anos de Experiência</h3>
            <p className="text-gray-600">Tradição e expertise em ambientes planejados</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;