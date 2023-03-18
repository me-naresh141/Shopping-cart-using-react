import React, { useState } from "react";
import data from "../data.json";
const Sidebar = (props) => {
  // console.log(props);
  let uniqSize = [];

  data.products.forEach((elm) => {
    uniqSize.push(...elm.availableSizes);
  });
  let updatedSize = Array.from(new Set(uniqSize));
  // console.log(uniqSize);
  // console.log(updatedSize);
  return (
    <aside>
      <div>
        <h1>Sizes:</h1>
      </div>

      <div className="size-div">
        {updatedSize.map((size, index) => {
          return (
            <span
              className={props.size.includes(size) ? "active" : "unActive"}
              key={index}
              onClick={() => props.handleSize(size)}
            >
              {size}
            </span>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
