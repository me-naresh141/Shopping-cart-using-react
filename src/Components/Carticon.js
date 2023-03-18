import React from "react";
import { BsCart4 } from "react-icons/bs";
const CartIcon = (props) => {
  // console.log(props.totalItem);
  return (
    <div className="cart-icon-div">
      <BsCart4 className="cart-icon" onClick={props.handleTOggle} />
      <div className="notification">
        <p>{props.totalItem.length}</p>
      </div>
    </div>
  );
};

export default CartIcon;
