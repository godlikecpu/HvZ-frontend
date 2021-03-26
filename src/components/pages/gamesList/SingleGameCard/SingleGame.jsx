import React from "react";
import { Link } from "react-router-dom";
import "./SingleGameStyles.css";

const GameCard = (props) => {
  let gameLink = "/game/" + props.game.id;

  return (
    <>

      <div className="single-card">
        <div className="inner-div">
          <h1>{props.game.name}</h1>
          <br />
          <p>
            Players currently joined: {Object.keys(props.game.players).length}
          </p>
        </div>
        <div className="inner-div">
          <button className="invalid-btn">Join Game</button>
          <Link className="link" to={{ pathname: gameLink, gameProps: props.game }}>
            <button>Spectate Game</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default GameCard;
