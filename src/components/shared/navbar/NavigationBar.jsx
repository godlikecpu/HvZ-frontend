import React from "react";
import { Link } from "react-router-dom";
import "../navbar/NavBarStyles.css"

const NavigationBar = () => {
  return (
    <div className="navbar">
      <Link class="link" to="/">
        <div class="navbar-logo">
          <img src="./assets/navbarImage/zombie.png" />
          <h1>Humans vs Zombies</h1>
        </div>
      </Link>
      <Link class="link" to="/games">
        <div className="navbar-item">
          Games
      </div>
      </Link>
      <Link class="link" to="/leaderboards">
        <div className="navbar-item">
          Leaderboards
      </div>
      </Link>
      <Link class="link" to="/profile">
        <div className="navbar-item">
          Profile
      </div>
      </Link>
    </div >
  );
};

export default NavigationBar;
