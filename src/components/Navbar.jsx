import React from "react";
import { logo } from "../data/data.json";
import { Link } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import {CiLocationOn} from "react-icons/ci"
import {AiOutlineMenu} from "react-icons/ai"


import "../styles/Nav.css";
const Navbar = () => {
  return (
    <div className="nav ">
      <div className="logo">
        <div className="logo-image">
          <img src={logo} alt="" />
        </div>
        <div className="link">
          <Link className="home" to="/">Home</Link>
          <span>/</span>
          <Link to="/features">Features</Link>
          <span>/</span>
          <Link to="/Portfolio">Portfolio</Link>
          <span>/</span>
          <Link to="/about">About</Link>
          <span>/</span>
          <Link to="/blog">Blog</Link>
          <span>/</span>
          <Link to="/store">Store</Link>
          <span>/</span>
          <Link to="/contacts">Contacts</Link>
        </div>
        <div className="number">
          <span className="org-number">+1254</span><span className="hover-number">9521463</span>
        </div>
      </div>
      <div className="right">
        {/* <FaSearchengin/> */}
        <TbSearch/>
        <div className="flex justify-center items-center gap-2">
        <CiLocationOn/>
        <span>Our location</span>
        </div>

        <button>MAKE AN APPOINTMENT</button>
      </div>
      <AiOutlineMenu  className="menu text-4xl" />
    </div>
  );
};

export default Navbar;
