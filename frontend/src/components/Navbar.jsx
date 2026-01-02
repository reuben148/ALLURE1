import React from 'react';

import logo from '../assets/logo.png';

export default function Navbar({ cartCount, onOpenCart }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="navbar-logo">
          ALLURE
        </div>
        <a href="#" className="navbar-link">STORE</a>
      </div>
      
      <button onClick={onOpenCart} className="navbar-cart-btn">
        CART ({cartCount})
      </button>
    </nav>
  );
}
