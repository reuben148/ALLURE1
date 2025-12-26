import React from 'react';

import logo from '../assets/logo.png';

export default function Navbar({ cartCount, onOpenCart }) {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '32px 0',
      marginBottom: '40px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
        <div style={{ 
          fontFamily: 'var(--font-serif)', 
          fontSize: '2rem', 
          fontWeight: '400', 
          letterSpacing: '-1px',
          color: '#fff'
        }}>
          ALLURE
        </div>
        <a href="#" style={{ fontSize: '0.8rem', fontWeight: '700', color: '#fff', letterSpacing: '1px', fontFamily: 'var(--font-sans)' }}>STORE</a>
      </div>
      
      <button onClick={onOpenCart} style={{ fontSize: '0.8rem', fontWeight: '700', color: '#fff', letterSpacing: '1px' }}>
        CART ({cartCount})
      </button>
    </nav>
  );
}
