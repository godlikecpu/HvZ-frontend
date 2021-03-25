import React from "react";
import { Link } from "react-router-dom";
import "../navbar/NavBarStyles.css";

const NavigationBar = () => {
  return (
    <div className="navbar">
      <Link className="link" to="/">
        <div className="navbar-logo">
          <img
            src={process.env.PUBLIC_URL + "/assets/navbarImage/zombie.png"}
            alt="Page logo"
          />
          <h1>Humans vs Zombies</h1>
        </div>
      </Link>
      <Link className="link" to="/games">
        <div className="navbar-item">Games</div>
      </Link>
      <Link className="link" to="/leaderboards">
        <div className="navbar-item">Leaderboards</div>
      </Link>
      <Link className="link" to="/profile">
        <div className="navbar-item">Profile</div>
      </Link>
    </div>
  );
};

export default NavigationBar;
