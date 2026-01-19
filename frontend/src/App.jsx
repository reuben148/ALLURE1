import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import CheckoutModal from './components/CheckoutModal';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const addToCart = (product, size, color) => {
    setCartItems([...cartItems, { ...product, selectedSize: size, selectedColor: color }]);
    setIsCartOpen(true);
  };

  const removeFromCart = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  const clearCart = () => {
    setCartItems([]);
    setIsCheckoutOpen(false);
    setIsCartOpen(false);
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
  const shippingFee = 7000;
  const totalAmount = subtotal + shippingFee;

  return (
    <div className="app" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div className="container" style={{ flex: 1 }}>
        <Navbar 
          cartCount={cartItems.length} 
          onOpenCart={() => setIsCartOpen(true)} 
        />
        <Hero />
        <ProductList onAddToCart={addToCart} />
      </div>
      
      <Footer />
      
      <CartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems} 
        onRemove={removeFromCart}
        subtotal={subtotal}
        shippingFee={shippingFee}
        totalAmount={totalAmount}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        subtotal={subtotal}
        shippingFee={shippingFee}
        totalAmount={totalAmount}
        onClearCart={clearCart}
      />
    </div>
  );
}
