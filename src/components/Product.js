import React from "react";

const Product = (props) => {
  return (
    <div className={props.nestedList && "product"}>
      {Object.entries(props).map(([key, val], index) => {
        return key === "nestedList" ? (
          <h4>Product</h4>
        ) : (
          <p key={index}>
            {key}: {val}
          </p>
        );
      })}
    </div>
  );
};

export default Product;
