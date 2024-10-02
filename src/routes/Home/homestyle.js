import styled from 'styled-components';

export const MainHome = styled.div`
flex-grow: 1;
  padding: 2rem;
  background-color: #1E2A38;
`;

export const DestaqueSecao = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2B3A48;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  filter: drop-shadow(0 0 0.75rem #76d0b7);

  .destaque-imagem {
    position: relative;
    width: 50%; /* Aumente ou diminua conforme necessário */
    height: 400px;
    overflow: hidden;
    border-radius: 8px;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover; /* Mantém as proporções da imagem e preenche o contêiner */
      transition: opacity 0.5s ease;
    }
  }
  

  .destaque-texto {
    width: 45%;
    text-align: left;

    h2 {
      font-size: 2.5rem;
      color: #fff;
    }

    p {
      margin: 1rem 0;
      font-size: 1.2rem;
      color: #fff;
    }

    .botao-destaque {
      display: inline-block;
      padding: 1rem 2rem;
      background-color: #76d0b7;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
      transition: background-color 0.3s;

      &:hover {
        background-color: #333;
      }
    }
  }
`;

export const OpcoesSecao = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;

  .opcao {
    width: 23%;
    background-color: #2B3A48;
    padding: 2rem;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    filter: drop-shadow(0 0 0.35rem #76d0b7);
    
    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #fff;
    }

    p {
      color: #fff;
      font-size: 1rem;
    }
  }
`;
