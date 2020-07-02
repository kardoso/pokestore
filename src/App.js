import React, { useState } from "react";
import styled from "styled-components";

import { Topbar, ProductsView, CartView } from "./components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductsContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

function App() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const handleAddToCart = (data) => {
    const newCart = JSON.parse(localStorage.getItem("cart")) || [];
    newCart.push({
      id: data.id,
      name: data.name,
      image: data.image,
      price: data.price,
    });
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleClearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  return (
    <MainContainer className="App">
      <Topbar />
      <ProductsContainer>
        <ProductsView addToCart={handleAddToCart} />
        <CartView cart={cart} clearCart={handleClearCart} />
      </ProductsContainer>
    </MainContainer>
  );
}

export default App;
