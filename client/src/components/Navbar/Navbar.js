import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../constants/actionTypes";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
function NavBar(props) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const logout = () => {
    dispatch({ type: LOGOUT });

    navigate("/auth");

    setUser(null);
  };

  return (
    <div className="navbar">
      <div onClick={()=>{navigate("/")}} className="logo">
        <img src={require("../../resources/logo.png")} alt="" />
          <h2>CodRella</h2>
      </div>

      <ul className="links">
        <li>
          <Link className="nav-element" to={{ pathname: "/" }}>
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-element" to={{ pathname: "/about" }}>
            About
          </Link>
        </li>
        <li>
          <Link className="nav-element" to={{ pathname: "/contact" }}>
            Contact
          </Link>
        </li>
        {props.type === "login" ? (
          <li>
            <Link className="nav-element" onClick={logout} to={{ pathname: '/login' }}>
              {user?.result ? 'LOGOUT' : 'LOGIN'}
            </Link>
          </li>
        ) : props.type === "home" ? (
          <div className="right">
            <Link className="dashboard-btn" to={{ pathname: "/dashboard" }}>  </Link>
          </div>
        ) : ""}
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
