import React from 'react';
import './Nav.scss'; 
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <div class="topnav">
      <NavLink  to="/" exact>Home</NavLink>
      <NavLink  to="/login">Login</NavLink>
      <NavLink  to="/car">Car</NavLink>
      <NavLink  to="/hellochaoxin">Hello</NavLink>
    </div>
  );
};

export default Header;
