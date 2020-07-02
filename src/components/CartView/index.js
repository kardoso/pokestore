import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-width: 280px;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  padding: 12px;
`;

const CartWrapper = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  padding: 0px 12px;
`;

const CartProduct = styled.div`
  height: 72px;
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProductImage = styled.img`
  height: 100%;
`;

const ProductName = styled.p`
  display: block;
  margin-block-start: 0.1em;
  margin-block-end: 0.1em;
  margin: auto 12px;
  font-size: 1rem;
  text-transform: capitalize;
  font-weight: bold;
`;

const ProductPrice = styled.p`
  display: block;
  margin-block-start: 0.1em;
  margin-block-end: 0.1em;
  font-size: 1rem;
  color: #3b6bb8;
  margin-left: auto;
`;

const TotalPrice = styled.p`
  display: block;
  margin-block-start: 0.1em;
  margin-block-end: 0.1em;
  margin: auto 12px;
  font-size: 1rem;
  margin-left: auto;
`;

const CenterText = styled.p`
  text-align: center;
`;

const PurchaseButton = styled.button`
  width: 100%;
  background-color: #3b6bb8;
  color: #fff;
  outline: none;
  border: none;
  border-radius: 8px;
  font-size: 1.2em;
  margin: 4px 0px;
  padding: 8px;
  cursor: pointer;
`;

function CartView({ cart, clearCart, closeCart }) {
  return (
    <Wrapper>
      <Title>Carrinho</Title>
      <CartWrapper>
        {cart.length > 0 ? (
          cart.map((product) => (
            <CartProduct key={product.id}>
              <ProductImage src={product.image} alt={product.image} />
              <ProductName>{product.name}</ProductName>
              <ProductPrice>{product.price}</ProductPrice>
            </CartProduct>
          ))
        ) : (
          <CenterText>O carrinho está vazio</CenterText>
        )}
      </CartWrapper>
      <TotalPrice>
        <b>TOTAL: </b>
        {cart.length > 0 &&
          "R$ " +
            cart
              .map((product) =>
                parseFloat(product.price.split(" ")[1].replace(",", "."))
              )
              .reduce((a, b) => a + b, 0)}
      </TotalPrice>
      <PurchaseButton onClick={clearCart}>Finalizar compra</PurchaseButton>
    </Wrapper>
  );
}

export default CartView;
