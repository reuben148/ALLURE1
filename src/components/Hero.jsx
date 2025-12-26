import React from 'react';

export default function Hero() {
  return (
    <header style={{
      height: '60vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '80px',
      position: 'relative'
    }}>
      <h1 style={{ 
        fontFamily: 'var(--font-serif)', 
        fontSize: '10rem', 
        color: '#ff0000', 
        fontWeight: '400', 
        letterSpacing: '-4px',
        lineHeight: '1',
        animation: 'pulse 3s infinite ease-in-out'
      }}>
        ALLURE
      </h1>
    </header>
  );
}
