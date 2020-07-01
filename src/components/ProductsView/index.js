import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Product from "../Product";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function ProductsView() {
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
      {products.map((product) => (
        <Product key={product.id} data={product}></Product>
      ))}
    </Wrapper>
  );
}

export default ProductsView;
