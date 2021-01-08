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
          <Product
            id="00001"
            title="AirPods Pro de Apple"
            price={129.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="00002"
            title="Sony WH-1000XM4"
            price={345.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg"
            rating={3}
          />
        </div>

        <div className="home_row">
          <Product
            id="00004"
            title="Echo (3ª generación) - Parlante inteligente con Alexa - Azul"
            price={210.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61D%2B3FTZ3ML._AC_SL1000_.jpg"
            rating={3}
          />
          <Product
            id="00003"
            title="Acer Predator Helios 300"
            price={1199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71k45hZkLmL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="00005"
            title="Apple Watch Serie 3"
            price={324.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71fwbMm1NBL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="00006"
            title="Samsung c49hg90dmu 48.9 inch (48.9) Quantum Dot LED Monitor LCD – 32: 9 – 1 MS – 3840 x 1080"
            price={2100.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
