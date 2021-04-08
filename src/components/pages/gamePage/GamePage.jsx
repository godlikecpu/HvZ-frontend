import Map from "../../map/Map";
import { fetchGame, fetch } from "../../../utils/apiFetcher";
import { useState, useEffect } from "react";
import GameStatistics from "../../game-statistics/GameStatistics";
import Chat from "../../chat/Chat";
import "./GamePageStyles.css";

const GamePage = (props) => {
  const [game, setGame] = useState({});
  const [kills, setKills] = useState([]);
  const gameId = window.location.href.split("/")[4];

  useEffect(() => {
    fetchGame(gameId).then((gameData) => {
      setGame(gameData);
      gameData.kills.map(async (apiCall) => {
        await fetch(apiCall).then((kill) => {
          setKills((kills) => [...kills, kill]);
        });
      });
    });
    // eslint-disable-next-line
  }, []);

  return Object.keys(game).length !== 0 ? (
    <>
      <h2 className="game-title">{game.name}</h2>
      <div style={{ display: "flex" }}>
        <Map game={game} kills={kills} setKills={setKills}></Map>
        <div>
          <Chat />
          <GameStatistics game={game}></GameStatistics>
        </div>
      </div>
    </>
  ) : (
    <h1>Loading</h1>
  );
};

export default GamePage;
