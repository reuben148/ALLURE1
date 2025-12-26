import React, { useState } from 'react';

export default function ProductCard({ product, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0] : null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div className="product-card-image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-card-image"
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <h3 style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{product.name}</h3>
        <p style={{ color: '#666', fontSize: '0.8rem', fontWeight: '500' }}>₦{product.price.toLocaleString()}</p>
      </div>

      <div className="card-options" style={{ display: 'flex', gap: '8px' }}>
        <select 
          value={selectedSize} 
          onChange={(e) => setSelectedSize(e.target.value)}
          style={{
            background: 'transparent',
            color: '#fff',
            border: '1px solid #222',
            padding: '10px',
            fontSize: '0.7rem',
            outline: 'none',
            flex: 1,
            cursor: 'pointer',
            textTransform: 'uppercase',
            fontWeight: '600'
          }}
        >
          {['S', 'M', 'L'].map(size => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>

        {product.colors && (
          <select 
            value={selectedColor} 
            onChange={(e) => setSelectedColor(e.target.value)}
            style={{
              background: 'transparent',
              color: '#fff',
              border: '1px solid #222',
              padding: '10px',
              fontSize: '0.7rem',
              outline: 'none',
              flex: 1,
              cursor: 'pointer',
              textTransform: 'uppercase',
              fontWeight: '600'
            }}
          >
            {product.colors.map(color => (
              <option key={color} value={color}>{color}</option>
            ))}
          </select>
        )}
      </div>

      <button 
        className="btn-primary" 
        style={{ width: '100%', marginTop: '4px', fontSize: '0.7rem', letterSpacing: '2px', padding: '14px' }}
        onClick={() => onAddToCart(product, selectedSize, selectedColor)}
      >
        Add to Cart
      </button>
    </div>
  );
}
