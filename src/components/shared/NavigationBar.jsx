import React from "react";
import { Link } from "react-router-dom";
import "./../../App.css";

const NavigationBar = () => {
  return (
    <div className="navbar">
      <h1>Humans v Zombies</h1>
      <div className="navbar-item">
        <Link to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
      </div>
      <div className="navbar-item">
        <Link to="/game" style={{ textDecoration: "none" }}>
          Game
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
