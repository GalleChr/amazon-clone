import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>AirPods Pro</p>
        <p className="product_price">
          <small>$</small>
          <strong>129.99</strong>
        </p>
        <div className="product_rating">
          <p>⭐</p>
        </div>
      </div>

      <img
        src="https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._AC_SL1500_.jpg"
        alt=""
      />

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
