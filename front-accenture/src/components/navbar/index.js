import './index.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img alt="Logo" />
      </div>
      <div className="links">
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
