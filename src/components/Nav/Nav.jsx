import React from 'react';
import { Link } from 'react-router-dom'; // Aqui está o correto uso do Link
import { HeaderContainer, Logo, NavMenu, IconContainer } from './styledn.js';
import { FaUser, FaCloud } from 'react-icons/fa';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>  
        <h1>Volt Motors</h1>
      </Logo>
      <NavMenu>
        {/* Troque <NavLink> por <Link> com className para estilização */}
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/produtos" className="nav-link">Produtos</Link>
        <Link to="/sobre" className="nav-link">Sobre</Link>
      </NavMenu>
      <IconContainer>
        <Link to="/cadUsuarios">
          <FaCloud />
          <span>Registro</span>
        </Link>
        <Link to="/login">
          <FaUser />
          <span>Login</span>
        </Link>
      </IconContainer>
    </HeaderContainer>
  );
};

export default Header;
