import styled from "styled-components";

export const MainProd = styled.main`
  flex-grow: 1;
  background-color: #ddf;
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #1E2A38;
  color: white;

  .produtos {
    width: 100%;
    max-width: 1200px;
  }

  h2 {
    text-align: center;
    font-size: 36px;
    margin-bottom: 40px;
  }

  .produtos-grid {
    display: flex;
    flex-wrap: wrap; /* Permite o wrapping */
    justify-content: space-between; /* Espaça os itens */
    gap: 20px; /* Espaço entre os cards */
  }

  .card {
    background-color: #2B3A48;
    border-radius: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    padding: 20px;
    text-align: center;
    transition: transform 0.2s;
    flex: 0 1 calc(33.33% - 20px); /* Ajusta para 3 cards por linha, menos o espaço da margem */
    margin-bottom: 20px; /* Adiciona espaço vertical */
    filter: drop-shadow(0 0 0.40rem #76d0b7);
  }

  .card:hover {
    transform: scale(1.05);
  }

  .imagem-produtos {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .preco {
    font-size: 18px;
    color: #76d0b7;
    margin-bottom: 15px;
  }

  p {
    font-size: 14px;
    margin-bottom: 10px;
  }

  button {
    background-color: #f44336;
    border: none;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #d32f2f;
  }
  
`;
