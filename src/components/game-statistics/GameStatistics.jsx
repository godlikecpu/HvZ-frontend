import React from "react";
import "./GameStatisticsStyle.css";
import PlayerStatistic from "../game-statistics/PlayerStatistic/PlayerStatistic";

const GameStatistics = ({ game }) => {
  return (
    <>
      <div className="row">
        <div className="column">
          <h3>Game state: {game.gameState}</h3>
          <h3>Amount of players: {game.players.length}</h3>
          <h3>Amount of kills: {game.kills.length}</h3>
          <h3>
            North-West: {game.northWestLatitude} °, {game.northWestLongitude}°{" "}
          </h3>
          <h3>
            South-East: {game.southEastLatitude} °, {game.southEastLongitude}°{" "}
          </h3>
        </div>
        {window.atob(localStorage.getItem("role")) === "game-master" && (
          <div className="column">
            <PlayerStatistic game={game} />
          </div>
        )}
      </div>
    </>
  );
};

export default GameStatistics;
