import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <nav>
        <div id="navbar">
          <div id="logo" className="reverse">
            <div className="mobile-btn">&#9776;</div>
            <div className="logo">
              Codre<span>lla</span>
            </div>
          </div>
          <div id="links">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Blog</a>
            <a href="/">Service</a>
            <a href="/">Contact</a>
          </div>
        </div>
      </nav>
      <div id="mySidenav" className="sidenav">
        <a href="/" style={{ cursor: "pointer" }} className="closebtn">
          &times;
        </a>
        <a href="/">Home</a>
        <a href="/">Gallery</a>
        <a href="/">Blog</a>
        <a href="/">Portfolio</a>
        <a href="/">Contact</a>
      </div>
    </>
  );
};

export default Navbar;
