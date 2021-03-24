import Map from "../map/Map";
import { fetchGame, fetch } from "../../utils/apiFetcher";
import { useState, useEffect } from "react";

const GamePage = () => {
  const [game, setGame] = useState({});
  const [kills, setKills] = useState([]);
  const gameId = 2;

  useEffect(() => {
    // (async () => {
    //   setGame(await fetchGame(gameId));
    //   setKills(
    //     game.kills.map(async (apiCall) => {
    //       return fetch(apiCall);
    //     })
    //   );
    // })();
    const kills = [];

    fetchGame(gameId)
      .then((gameData) => {
        setGame(gameData);
        return gameData;
      })
      .then((gameData) => {
        gameData.kills.map(async (apiCall) => {
          fetch(apiCall).then((kill) => {
            kills.push(kill);
          });
        });
      });
    setKills(kills);

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h2>{game.name}</h2>
      <Map game={game} kills={kills}></Map>
    </>
  );
};

export default GamePage;
