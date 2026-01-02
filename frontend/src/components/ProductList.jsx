import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

export default function ProductList({ onAddToCart }) {
  return (
    <section className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </section>
  );
}
