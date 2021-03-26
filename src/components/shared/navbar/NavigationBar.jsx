import React from "react";
import { Link } from "react-router-dom";
import "../navbar/NavBarStyles.css";

const NavigationBar = () => {
  return (
    <div className="navbar">
      <Link class="link" to="/">
        <div class="navbar-logo">
          <img src={process.env.PUBLIC_URL + "/assets/navbarImage/zombie.png"} alt="Page logo" />
          <h1>Humans vs Zombies</h1>
        </div>
      </Link>
      <Link class="link" to="/official-rules">
        <div className="navbar-item">
          Official Rules
      </div>
      </Link>
      <Link class="link" to="/games">
        <div className="navbar-item">
          Games
      </div>
      </Link>
    </div>
  );
};

export default NavigationBar;
