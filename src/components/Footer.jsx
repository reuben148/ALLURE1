import React from 'react';

export default function Footer() {
  return (
    <footer style={{ 
      marginTop: '80px', 
      padding: '40px 0', 
      borderTop: '1px solid #222',
      textAlign: 'center',
      color: '#666',
      fontSize: '0.8rem'
    }}>
      <div className="container">
        <p style={{ marginBottom: '16px', letterSpacing: '2px', color: '#fff' }}>ALLURE</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '24px' }}>
          <a href="tel:09071009969">09071009969</a>
          <a href="mailto:reubenluka555@gmail.com">reubenluka555@gmail.com</a>
        </div>
        <p>&copy; 2025 ALLURE. All rights reserved.</p>
      </div>
    </footer>
  );
}
