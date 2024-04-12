import React from "react";
import Logo from "../../assets/images/garages-logo.png";
import External from "../../assets/images/external-link.png";
import Access from "../../assets/icons/access.svg";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="header_main">
        <img src={Logo} alt="GaragesLogo" />
        <div className="header_links">
          <a href="#">Introduction</a>
          <a href="#">Admissions</a>
          <a href="#">Curriculum</a>
        </div>
        <div className="header_btns">
          <button>
            Apply Now <img src={External} alt="ExternalLink" />
          </button>
          <a href="#">
            <img src={Access} alt="access" />
            Access
          </a>
        </div>
      </div>
      <div className="responsive_main">
        <div className="responsive_head">
          <img src={Logo} alt="GaragesLogo" />
          <a href="#">
            <img src={Access} alt="access" />
            Access
          </a>
        </div>
        <div className="header_links">
          <a href="#">Introduction</a>
          <a href="#">Admissions</a>
          <a href="#">Curriculum</a>
        </div>
      </div>
    </>
  );
};

export default Header;
