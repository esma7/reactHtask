import React from "react";
import "../css/product.css"
import product1 from "../img/product-1.png";
import product2 from "../img/product-2.png";
import product3 from "../img/product-3.png";

const Products = () => {
  return (
    <section id="products">
     <div className="container">
     <div className="productInfo">
        <h3>Crafted with excellent material.</h3>
        <p>
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
        <button>Explore</button>
      </div>
      <div className="productBody">
        <div className="productImage">
          <img className="image" src={product1} alt="" />
          <h4>Nordic Chair</h4>
          <strong>$50.00</strong>
        </div>
        <div className="productImage">
          <img className="image" src={product2} alt="" />
          <h4>Kruzo Airo Chair</h4>
          <strong>$78.00</strong>
        </div>
        <div className="productImage">
          <img className="image" src={product3} alt="" />
          <h4>Ergonomic Chair</h4>
          <strong>$43.00</strong>
        </div>
      </div>
     </div>
    </section>
  );
};

export default Products;
