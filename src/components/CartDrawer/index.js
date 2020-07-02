import React from "react";
import Drawer from "@material-ui/core/Drawer";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { CartView } from "..";

const CartLink = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 1.1em;
  padding-right: 8px;
  font-weight: bold;
`;

const ItemsCount = styled.span`
  color: red;
`;

export default function CartDrawer({ cart, clearCart }) {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    event.preventDefault();
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <React.Fragment>
      <CartLink href="/" className="cart" onClick={toggleDrawer("right", true)}>
        <span>
          <ItemsCount className="cart__indicator">{cart.length}</ItemsCount>
          <FontAwesomeIcon icon={faShoppingCart} className="cart__icon" />
        </span>
      </CartLink>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        <CartView cart={cart} clearCart={clearCart} />
      </Drawer>
    </React.Fragment>
  );
}
