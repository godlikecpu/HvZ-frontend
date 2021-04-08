import React, { useEffect, useState } from "react";
import SingleGame from "./SingleGameCard/SingleGame.jsx";
import "./GamesListStyles.css";
import CreateGame from "../../create-game/CreateGame";

const Games = () => {
  const [isLoading, setLoading] = useState(true);
  const [games, setGames] = useState([]);

  //https://hvz-backend-v1.herokuapp.com/api/v1/game/2

  useEffect(() => {
    async function fetchData() {
      await fetch("https://hvz-backend-v1.herokuapp.com/api/v1/game")
        .then((response) => response.json())
        .then((data) => setGames(data));

      setLoading(false);
    }
    fetchData();
  }, []);

  //If API hasn't returned any data, user will see a loading notification
  if (isLoading) {
    return (
      <>
        <div className="loading">Loading...</div>
      </>
    );
  }

  return (
    <>
      {(window.atob(localStorage.getItem("role")) === "game-master") && <CreateGame />}
      {games &&
        games.map((oneGame, index) => (
          <SingleGame key={index} game={oneGame} />
        ))}
    </>
  );
};

export default Games;
