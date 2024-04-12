import React from "react";
import Samimg from "../../assets/images/samimg.png";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero_main">
      <h1>
        Unlearn and Unleash the <br />
        <span>Business Magnate</span>
        <br /> WITH IN YOU
      </h1>
      <div className="hero_bg">
        <img src={Samimg} alt="Sam" />
        <p>
          We are on a mission to build INDIA's first unschool for business
          leadership,
          <br />
          thus unlimiting the minds of tommorrow to go beyond traditional
          degrees,classrooms and
          <br />
          innovate for real causes, scale them into global busiesses from
          nowhere, remote.
        </p>
      </div>
    </div>
  );
};
export default Hero;
