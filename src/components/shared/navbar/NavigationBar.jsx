import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../navbar/NavBarStyles.css";

const NavigationBar = () => {

  let history = useHistory();

  function LoginBtn() {
    if (localStorage.getItem("token") == null) {
      return (
        <Link id="right-side" className="link" to="/login">
          <div className="navbar-item">
            Login
        </div>
        </Link>
      )
    } else {
      return (
        <Link id="right-side" className="link" to="/">
          <div className="navbar-item" onClick={LogOut}>
            LogOut
          </div>
        </Link>
      )
    }
  }

  function LogOut() {
    localStorage.clear()
    history.push("/")
    window.location.reload()
  }

  return (
    <div className="navbar">
      <Link className="link" to="/">
        <div className="navbar-logo">
          <img src={process.env.PUBLIC_URL + "/assets/navbarImage/zombie.png"} alt="Page logo" />
          <h1>Humans vs Zombies</h1>
        </div>
      </Link>
      <Link className="link" to="/official-rules">
        <div className="navbar-item">
          Official Rules
      </div>
      </Link>
      <Link className="link" to="/games">
        <div className="navbar-item">
          Games
      </div>
      </Link>
      <LoginBtn />
    </div>
  );
};

export default NavigationBar;
