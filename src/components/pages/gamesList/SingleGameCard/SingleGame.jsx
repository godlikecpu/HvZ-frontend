import React from "react";
import { Link } from "react-router-dom";
import "./SingleGameStyles.css";

const GameCard = (props) => {
  let gameLink = "/game/" + props.game.id;

  return (
    <>
      <Link className="link" to={{ pathname: gameLink, gameProps: props.game }}>
        <div className="single-card">
          <div>
            <h1>{props.game.name}</h1>
            <br />
            <p>
              Players currently joined: {Object.keys(props.game.players).length}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default GameCard;
