import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Product from "../Product";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ProductsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  max-width: 240px;
  display: flex;
  justify-content: space-between;
  margin: 12px auto;
`;

const NavigationButton = styled.button`
  outline: none;
  border: none;
  background-color: #3b6bb8;
  color: #fff;
  border-radius: 8px;
  padding: 12px 6px;
  margin: 2px;
  box-sizing: border-box;
  cursor: pointer;
`;

function ProductsView({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [pageNavigation, setPageNavigation] = useState({});
  const [apiUrl, setApiUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
  );

  useEffect(() => {
    fetch(apiUrl)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setProducts(
          data.results.map((product) => {
            const url = product.url.replace(/\/$/, "");
            const id = url.substr(url.lastIndexOf("/") + 1);
            return {
              id,
              ...product,
              price: "R$ 40,00",
              image: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
            };
          })
        );

        setPageNavigation({ next: data.next, previous: data.previous });
      });
  }, [apiUrl]);

  const handleNextPage = () => {
    setApiUrl(pageNavigation.next);
  };

  const handlePreviousPage = () => {
    setApiUrl(pageNavigation.previous);
  };

  return (
    <Wrapper>
      <ProductsWrapper>
        {products.map((product) => (
          <Product
            key={product.id}
            data={product}
            addToCart={addToCart}
          ></Product>
        ))}
      </ProductsWrapper>
      <ButtonsWrapper>
        {pageNavigation.previous !== null ? (
          <NavigationButton onClick={handlePreviousPage}>
            {"<"} Página anterior
          </NavigationButton>
        ) : (
          <div />
        )}
        {pageNavigation.next !== null ? (
          <NavigationButton onClick={handleNextPage}>
            Próxima página {">"}
          </NavigationButton>
        ) : (
          <div />
        )}
      </ButtonsWrapper>
    </Wrapper>
  );
}

export default ProductsView;
