import styled from "styled-components";

export const MainLogin= styled.main`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #1E2A38;

  .container {
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    width: 100%;
    background-color: #2B3A48;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    filter: drop-shadow(0 0 0.75rem #76d0b7);
  }

  /* Estilo da imagem à esquerda */
  .login-image {
    flex: 1; /* Ocupa 50% do espaço */
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1E2A38; /* Cor de fundo ou apenas imagem */

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  /* Estilo do formulário à direita */
  .login-form-container {
    flex: 1; /* Ocupa 50% do espaço */
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .titulo-login {
    font-size: 32px;
    color: white;
    text-align: center;
    margin-bottom: 20px;
  }

  .w-input {
    margin-bottom: 15px;
  }

  .input-form {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 5px;
    background-color: #1E2A38;
    color: white;
    font-size: 14px;
    outline: none;
  }

  .input-form:focus {
    border: 2px solid #76d0b7;
  }

  .login-btn {
    margin-top: 20px;
  }

  .login-form-btn {
    width: 100%;
    padding: 12px;
    background-color: #76d0b7;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    cursor: pointer;
  }

  .login-form-btn:hover {
    background-color: #66c3a2;
  }

  .uteis {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;

    li {
      color: #76d0b7;

      a {
        color: #76d0b7;
        text-decoration: none;
        font-weight: bold;
      }

      a:hover {
        text-decoration: underline;
      }
    }
  }
`;