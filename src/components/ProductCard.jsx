import React, { useState } from 'react';

export default function ProductCard({ product, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0] : null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    if (product.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (product.images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    }
  };

  return (
    <div className="product-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div className="product-card-image-container">
        <img 
          src={product.images[currentImageIndex]} 
          alt={product.name}
          className="product-card-image"
        />
        {product.images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              style={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.5)',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem'
              }}
            >
              &#8249;
            </button>
            <button 
              onClick={nextImage}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.5)',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem'
              }}
            >
              &#8250;
            </button>
          </>
        )}
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
        onClick={() => onAddToCart({ ...product, image: product.images[0] }, selectedSize, selectedColor)}
      >
        Add to Cart
      </button>
    </div>
  );
}
