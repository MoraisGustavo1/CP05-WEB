import styled from 'styled-components';

export const SobreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #1E2A38;
`;

export const TextoSobre = styled.div`
  max-width: 800px;
  text-align: center;
  margin-bottom: 2rem;
  padding: 2rem;
  background-color: #2B3A48; /* Cor de fundo da caixa */
  border-radius: 8px; /* Bordas arredondadas */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra para profundidade */
  filter: drop-shadow(0 0 0.40rem #76d0b7);
  
  h1 {
    font-size: 3rem;
    color: #76d0b7;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.8rem;
    color:#76d0b7;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.2rem;
    color: #fff;
    margin-bottom: 1.5rem;
    text-align: center;
  }
`;

export const ImagemSobre = styled.div`
  img {
    width: 100%;
    max-width: 800px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;
