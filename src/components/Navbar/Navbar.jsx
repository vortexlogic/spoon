import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavContainer = styled.nav`
  background-color: #333;
  color: white;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavBrand = styled.div`
  font-size: 1.5rem;
  margin-left: 2rem;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  margin-right: 2rem;

  li {
    margin-left: 1rem;
  }

  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Navbar = ({ brand, links }) => {
  return (
    <NavContainer>
      <NavBrand>{brand}</NavBrand>
      <NavLinks>
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </NavLinks>
    </NavContainer>
  );
};

export default Navbar;