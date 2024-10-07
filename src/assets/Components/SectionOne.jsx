import React from "react";
import "../css/sectionOne.css";
import image from "../img/couch.png"

const SectionOne = () => {
  return (
    <section id="sectionOne">
      <div className="container">
        <div className="info">
          <h2>
            Modern Interior Design Studio
          </h2>
          <p>
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <div className="btns">
            <button id="shop">Shop now</button>
            <button id="explore">Explore</button>
          </div>
        </div>
        <div className="image">
            <img src={image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
