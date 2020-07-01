import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 148px;
  margin: 12px 12px;
  padding: 4px 8px;
  background-color: #f8f8f8;
  border-radius: 8px;
`;

const Image = styled.img`
  max-width: 80%;
`;

const Title = styled.p`
  display: block;
  margin-block-start: 0.5em;
  margin-block-end: 0.1em;
  font-size: 1.2rem;
  text-transform: capitalize;
  font-weight: bold;
`;

const Price = styled.p`
  display: block;
  margin-block-start: 0.1em;
  margin-block-end: 0.3em;
  font-size: 1rem;
  color: #3b6bb8;
`;

const Button = styled.button`
  outline: none;
  border: none;
  background-color: #ffcc03;
  color: #fff;
  border-radius: 8px;
  padding: 8px 4px;
  cursor: pointer;
`;

function Product({ data }) {
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({
      id: data.id,
      name: data.name,
      image: data.image,
      price: data.price,
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <Wrapper href="/">
      <Image src={data.image} alt={data.name} />
      <Title>{data.name}</Title>
      <Price>{data.price}</Price>
      <Button onClick={handleAddToCart}>Adicionar ao carrinho</Button>
    </Wrapper>
  );
}

export default Product;
