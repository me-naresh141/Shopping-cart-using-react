import React, { useEffect } from "react";
import { BsCart4 } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { BsPlusSquareFill } from "react-icons/bs";
import { FaMinusSquare } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
let data = [];
const Cartinfo = (props) => {
  data = Array.from(new Set(props.totalItem));

  // total price
  let totol_price = 0;
  data.forEach((elm) => {
    totol_price += elm.quantity * elm.price;
  });

  const quantityIncreamet = (index) => {
    data[index].quantity += 1;
    props.setTotalItem(data);
  };

  const quantityDecrement = (index) => {
    data[index].quantity -= 1;
    props.setTotalItem(data);
  };

  return (
    <>
      <div className="cartInfo_div">
        {/* header */}
        <div className="cart_info_header">
          <BsCart4 className="cart_info" />
          <h1>Cart</h1>
          <div className="total_cart_num">
            <span>{props.totalItem.length}</span>
          </div>
          <div className="header_cross_btn_div" onClick={props.handleTOggle}>
            <FaTimes />
          </div>
        </div>
        {/* cart list */}
        <div className="cart_list">
          {/* single card */}
          {props.totalItem.length ? (
            data.map((elm, index) => {
              return (
                <div className="single_card" key={index}>
                  {/* 1 */}
                  <div className="single_card_info">
                    <figure className="single_card_product-figure">
                      <img
                        src={"/static/product/" + elm.sku + "_1.jpg"}
                        alt="img"
                      />
                    </figure>
                    {/*  */}
                    <div className="title_div">
                      <h2 className="cartInfo-title">{elm.title}</h2>
                      <span>Quantity: {elm.quantity}</span>
                    </div>
                  </div>
                  {/* 2 */}
                  <div className="cross_btn_div">
                    <RxCross2
                      className="cart_cross_btn"
                      id={elm.id}
                      onClick={() => {
                        props.handleRemove(elm.id);
                      }}
                    />
                    <span className="single_cart_price">$ {elm.price}</span>
                    {/* increment decrement */}
                    {elm.quantity === 1 ? (
                      <div>
                        <FaMinusSquare style={{ color: "gray" }} />
                        <BsPlusSquareFill
                          className="increment_btn"
                          onClick={() => quantityIncreamet(index)}
                        />
                      </div>
                    ) : (
                      <div>
                        <FaMinusSquare
                          className="decrement_btn"
                          onClick={() => quantityDecrement(index)}
                        />
                        <BsPlusSquareFill
                          className="increment_btn"
                          onClick={() => quantityIncreamet(index)}
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <h1 className="no_cart">Add some products in the cart 👍👍</h1>
          )}
        </div>

        {/* subtotal div */}
        <div className="subTotal_div">
          {/* total_price div */}
          <div className="total_price_div">
            <span className="subTotal">SUBTOTAL</span>
            <span className="total_price">$ {totol_price}</span>
          </div>
          {/* checkout */}
          <button
            className="check_out_btn"
            onClick={() => {
              alert("Checkout - Subtotal: $ " + totol_price);
            }}
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </>
  );
};

export default Cartinfo;
