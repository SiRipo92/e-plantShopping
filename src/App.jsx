import React, { useState } from 'react';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true); // Show product list when "Get Started" is clicked
  };

  const handleContinueShopping = () => {
    setShowCart(false); // Hide cart when continuing shopping
    setShowProductList(true); // Show products
  };

  return (
    <div className="app-container">
      {/* Landing Page */}
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
          <div className="landing_content">
            <h1>Welcome To Paradise Nursery</h1>
            <div className="divider"></div>
            <p>Where Green Meets Serenity</p>
            <button className="get-started-button" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
          <div className="aboutus_container">
            <AboutUs />
          </div>
        </div>
      </div>

      {/* Product List and Cart */}
      {showProductList && !showCart && (
        <div className="product-list-container visible">
          <ProductList />
        </div>
      )}

      {/* Show Cart if toggled */}
      {showCart && <CartItem onContinueShopping={handleContinueShopping} />}
    </div>
  );
}

export default App;