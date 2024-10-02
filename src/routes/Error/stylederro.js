import styled from 'styled-components';
export const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color:  #1E2A38;
  text-align: center;
`;

export const ErrorTitle = styled.h1`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 2rem;
`;

export const BackButton = styled.a`
  padding: 1rem 2rem;
  background-color: #76d0b7;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.2rem;

  &:hover {
    background-color: #0056b3;
  }
`;