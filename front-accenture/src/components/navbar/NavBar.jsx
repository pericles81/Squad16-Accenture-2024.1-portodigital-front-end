import './index.css'
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './../Button';
function Navbar() {

  const location = useLocation();
  const page = location.pathname


if(page == '/login' || page == '/cadastroClientes' || page == '/seleCad'){  return (
    <nav className="navbar">
      <div className="logo">
        <img alt="Logo" />
      </div>
      <div className="links">
        <Link to="/login">Login</Link>
        <Link to="/seleCad">Cadastrar-se</Link>
      </div>
    </nav>
    )
  }else if(page == '/lojas' || page == '/' || page== '/carrinho' || '/loja/:id'){
    return (
      <nav className="navbar">
        <div className="logo">
          <img alt="Logo" />
        </div>
        <div className="links">
          <Link to="/lojas">Lojas</Link>
          <Link to="/">Meus Anúncios</Link>
          <Link to="/carrinho">Carrinho</Link>
          <Link to="/seleCad"><Button type='button'
          value='Anunciar'></Button></Link>
          
        </div>
      </nav>
      )
  }


}

export default Navbar;
