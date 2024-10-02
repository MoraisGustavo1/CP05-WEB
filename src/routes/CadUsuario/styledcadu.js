import styled from "styled-components";

export const MainCadU = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #1E2A38;

  .container {
    display: flex;
    flex-direction: row;
    max-width: 900px;
    width: 100%;
    background-color: #2B3A48;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    filter: drop-shadow(0 0 0.75rem #76d0b7);
  }

  .register-image {
    flex: 1;
    background-color: #1E2A38;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .register-form-container {
    flex: 1;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 300px;
  }

  h1 {
    color: white;
    text-align: center;
    margin-bottom: 20px;
  }

  input {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 5px;
    background-color: #1E2A38;
    color: white;
    font-size: 14px;
    outline: none;
    margin-bottom: 15px;
  }

  input:focus {
    border: 2px solid #76d0b7;
  }

  button {
    width: 100%;
    padding: 12px;
    background-color: #76d0b7;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    cursor: pointer;
  }

  button:hover {
    background-color: #66c3a2;
  }

  a {
    display: block;
    text-align: center;
    margin-top: 20px;
    color: #76d0b7;
    font-weight: bold;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;