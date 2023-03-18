import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Product from "./Product";
import CartIcon from "./Carticon";
import Cartinfo from "./CartInfo";

const App = () => {
  const [state, setstate] = useState([]);
  // handle toogle
  const [open, setOpen] = useState(false);
  const handleTOggle = () => {
    setOpen(!open);
  };
  const handleTrue = () => {
    setOpen(true);
  };

  //get data fro local storage
  let getData = () => {
    const items = JSON.parse(localStorage.getItem("list"));
    if (items) {
      return JSON.parse(localStorage.getItem("list"));
    } else {
      return [];
    }
  };
  // add to cart data
  const [totalItem, setTotalItem] = useState(getData());

  // handleCart
  const handleCart = (elm) => {
    elm.quantity = 1;
    let updateItem = totalItem.map((item) => {
      if (elm.id == item.id) {
        ++item["quantity"];
      }
      return item;
    });
    setTotalItem([...updateItem, elm]);
  };

  //

  // remove item
  const handleRemove = (id) => {
    let item = totalItem.filter((elm) => {
      return elm.id !== id;
    });
    setTotalItem(item);
  };
  const handleSize = (size) => {
    let data = [...state];
    if (!data.includes(size)) {
      data.push(size);
    } else {
      data.splice(data.indexOf(size), 1);
    }
    setstate(data);
  };

  // set  data in local storage
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(totalItem));
  }, [totalItem]);

  return (
    <>
      <Sidebar handleSize={handleSize} size={state} />
      <Product
        size={state}
        handleCart={handleCart}
        handleTOggle={handleTOggle}
        handleTrue={handleTrue}
      />
      {open ? (
        <Cartinfo
          totalItem={totalItem}
          open={open}
          handleTOggle={handleTOggle}
          handleRemove={handleRemove}
          handleCart={handleCart}
          setTotalItem={setTotalItem}
        />
      ) : (
        <CartIcon
          handleTOggle={handleTOggle}
          open={open}
          totalItem={totalItem}
        />
      )}
    </>
  );
};

export default App;
