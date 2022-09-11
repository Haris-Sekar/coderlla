import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function NavBar(props) {
    return (
      <div className="navbar">
        <div className="logo">
          <img src={require("../../resources/logo.png")} alt="" />
          <h2>CodRella</h2>
        </div>

        <ul className="links">
          <li>
            <Link className="nav-element" to={{pathname:"/"}}>
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-element" to={{pathname:"/about"}}>
              About
            </Link>
          </li>
          <li>
            <Link className="nav-element" to={{pathname:"/contact"}}>
              Contact
            </Link>
          </li>
          {props.type === "login"?(
          <li>
            <Link className="nav-element" to={{pathname:"/login"}}>
              Login
            </Link>
          </li>
          ):props.type==="home"?(
            <div className="right">
            <Link className="dashboard-btn" to={{pathname:"/dashboard"}}>Dashboard</Link>
        </div>
          ):""}
        </ul>

        <div className="toggle">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    );
    }

export default NavBar;
