import React from 'react';
import { SobreContainer, TextoSobre, ImagemSobre } from './sobrestyled.js';
import imagemEmpresa from '../../assets/shaking.jpg'; // Substitua com a imagem da empresa

const Sobre = () => {
  return (
    <SobreContainer>
      <TextoSobre>
      <h1>Sobre Nós</h1>
        <h2>Quem somos?</h2>
        <p>
          Somos uma loja dedicada à inovação e à sustentabilidade no setor automotivo. Oferecemos uma
          ampla gama de carros elétricos, projetados para garantir a melhor experiência ao cliente, 
          sem comprometer o meio ambiente.
        </p>
        <h2>Nossa missão</h2>
        <p>
          Nossa missão é impulsionar o futuro da mobilidade com veículos elétricos de ponta. Acreditamos 
          em um mundo onde a eficiência energética e a sustentabilidade caminham lado a lado, promovendo 
          uma revolução no transporte.
        </p>
        <h2>Desenvolvido por: Gustavo Morais, Estevam Melo, <br></br>Leonardo Gonçalves e Miguel Carmo</h2>
      </TextoSobre>
      <ImagemSobre>
        <img src={imagemEmpresa} alt="Nossa Empresa" />
      </ImagemSobre>

    </SobreContainer>
  );
};

export default Sobre;
