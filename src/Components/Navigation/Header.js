import React from 'react';
import './Nav.scss'; 
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className="topnav d-flex justify-content-between align-items-center">

      <div className="nav-left">
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/listproduct">Product</NavLink>
        <NavLink to="/listcategories">Category</NavLink>
      </div>

      <div className="nav-right">
        <NavLink to="/login">Login</NavLink>
      </div>
    </div>
  );
};

export default Header;
