import React from "react";
import data from "../data.json";

const Product = (props) => {
  // console.log(props);
  let uniqueSize = Array.from(new Set(props.size));
  //   console.log(uniqueSize);
  let selectedProduct = [];

  return (
    <div className="main-div">
      {/* product parent div */}
      <div>
        {/* filter */}
        {uniqueSize.forEach((usize) => {
          data.products.filter((elm) => {
            if (elm.availableSizes.includes(usize)) {
              return selectedProduct.push(elm);
            }
          });
        })}
        {/*  */}
        {/* {console.log([...new Set(selectedProduct)])} */}
        <div className="total_product_number">
          {[...new Set(selectedProduct)].length !== 0 ? (
            <h2>{[...new Set(selectedProduct)].length} Product(s) found</h2>
          ) : (
            <h2> 16 Product(s) found</h2>
          )}
        </div>

        <div className="product-parent-div">
          {selectedProduct.length !== 0
            ? [...new Set(selectedProduct)].map((elm, index) => {
                return (
                  <div className="product-div" key={index}>
                    {/* img */}
                    {
                      <figure className="product-figure">
                        <img
                          src={"/static/product/" + elm.sku + "_1.jpg"}
                          alt="img"
                        />
                      </figure>
                    }
                    {/* free shipping */}
                    {elm.isFreeShipping ? (
                      <span className="shipping">free shipping</span>
                    ) : (
                      ""
                    )}
                    <p>{elm.title}</p>
                    <span>{elm.currencyFormat}</span>
                    <strong>{elm.price}</strong> <br />
                    <button
                      className="add_to_cart_btn"
                      onClick={() => {
                        props.handleCart(elm);
                        props.handleTrue();
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                );
              })
            : data.products.map((elm, index) => {
                return (
                  <div className="product-div" key={index}>
                    {/* img */}
                    <figure className="product-figure">
                      <img
                        src={"/static/product/" + elm.sku + "_1.jpg"}
                        alt="img"
                      />
                    </figure>
                    {/* free shipping */}
                    {elm.isFreeShipping ? (
                      <span className="shipping">free shipping</span>
                    ) : (
                      ""
                    )}
                    <p>{elm.title}</p>
                    <span>{elm.currencyFormat}</span>
                    <strong>{elm.price}</strong> <br />
                    <button
                      className="add_to_cart_btn"
                      onClick={() => {
                        props.handleCart(elm);
                        props.handleTrue();
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                );
              })}
        </div>

        {/*  */}
        {/*  */}
      </div>
    </div>
  );
};

export default Product;
