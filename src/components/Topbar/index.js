import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 64px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-style: solid;
  border-bottom-color: #c0c0c0;
  border-bottom-width: 1px;
`;

const Logo = styled.img`
  max-height: 70%;
`;

function Topbar() {
  return (
    <Wrapper>
      <Logo src="/img/pokestore.png" />
    </Wrapper>
  );
}

export default Topbar;
