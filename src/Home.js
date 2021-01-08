import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2021/NYNY/Fuji_TallHero_NYNY_es_US_1x._CB412256579_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product />
          <Product />
          <Product />
        </div>

        <div className="home_row">
          {/* Product */}
          {/* Product */}
          {/* Product */}
        </div>

        <div className="home_row">{/* Product */}</div>
      </div>
    </div>
  );
}

export default Home;
