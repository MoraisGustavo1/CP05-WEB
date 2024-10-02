import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import imagem1 from "../.././assets/seal.jpg";
import imagem2 from "../.././assets/yuan.jpg";
import imagem3 from "../.././assets/dolphin.jpg"; 
import { MainHome, DestaqueSecao, OpcoesSecao } from './homestyle.js';

const slidesData = [
  { src: imagem1, alt: 'carro1' },
  { src: imagem2, alt: 'carro2' },
  { src: imagem3, alt: 'carro3' },
  
];

const Home = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % slidesData.length);
    }, 5000);

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <MainHome>
      <DestaqueSecao>
        <section className='destaque-imagem'>
        {slidesData.map((slide, index) => (
        <img
          key={index}
          src={slide.src}
          alt={slide.alt}
          style={{ display: index === currentSlide ? 'block' : 'none' }}
        />
      ))}
        </section>
        <div className="destaque-texto">
          <h2>Volt Motors</h2>
          <p>Bem-vindo à nossa loja de carros elétricos, onde a inovação encontra a sustentabilidade. Explore nosso portfólio de veículos ecológicos, projetados para oferecer desempenho excepcional, eficiência energética e um futuro mais verde. Descubra como você pode fazer parte da revolução da mobilidade elétrica e dê o primeiro passo para um estilo de vida mais sustentável!</p>
          <Link to="/produtos" className="botao-destaque">Confira nossos veículos</Link>
        </div>
      </DestaqueSecao>
      <OpcoesSecao>
        <div className="opcao">
          <h3>Reserve Online</h3>
          <p>Garanta seu carro elétrico agora mesmo.</p>
        </div>
        <div className="opcao">
          <h3>Visualizar Preços</h3>
          <p>Confira as opções de preços de nossos modelos.</p>
        </div>
        <div className="opcao">
          <h3>Agende um Test Drive</h3>
          <p>Experimente a revolução da mobilidade elétrica.</p>
        </div>
        <div className="opcao">
          <h3>Monte o Seu</h3>
          <p>Personalize seu carro elétrico ideal.</p>
        </div>
      </OpcoesSecao>
    </MainHome>
  );
};

export default Home;
