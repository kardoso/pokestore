import React from "react";
import Drawer from "@material-ui/core/Drawer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { CartView } from "..";

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
      <a href="/" className="cart" onClick={toggleDrawer("right", true)}>
        <span>
          <FontAwesomeIcon icon={faShoppingCart} className="cart__icon" />
          <span className="cart__indicator">1</span>
        </span>
      </a>
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
