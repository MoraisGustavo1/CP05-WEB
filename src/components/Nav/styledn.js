import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2B3A48;
  padding: 1rem 2rem;
  color: #fff;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 40px;
    margin-right: 10px;
  }

  h1 {
    font-size: 1.5rem;
    color: #fff;
    font-family: 'Arial', sans-serif;
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  gap: 2rem;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const NavLink = styled.a` // TROQUE PARA <a> BÁSICO
  font-weight: 400;
  font-size: 1rem;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #999;
  }

  &.active {
    color: #fff;
    font-weight: 700;
    text-decoration: underline;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #fff;
    font-size: 1rem;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border: 1px solid #fff;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #fff;
      color: #000;
    }

    svg {
      font-size: 1.2rem;
    }

    span {
      font-size: 1rem;
    }
  }
`;