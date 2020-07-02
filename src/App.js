import React, { useState } from "react";

import { Topbar, ProductsView } from "./components";

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

  return (
    <div className="App">
      <Topbar />
      <ProductsView addToCart={handleAddToCart} />
    </div>
  );
}

export default App;
