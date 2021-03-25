import Map from "../map/Map";
import { fetchGame, fetch } from "../../utils/apiFetcher";
import { useState, useEffect } from "react";

const GamePage = (props) => {
  const [game, setGame] = useState({});
  const [kills, setKills] = useState([]);
  const gameId = props.location.pathname.split("/")[2];
  useEffect(() => {
    if (props.location.gameProps) {
      const gameData = props.location.gameProps;
      setGame(gameData);
      gameData.kills.map(async (apiCall) => {
        await fetch(apiCall).then((kill) => {
          setKills((kills) => [...kills, kill]);
        });
      });
    } else {
      fetchGame(gameId).then((gameData) => {
        setGame(gameData);
        gameData.kills.map(async (apiCall) => {
          await fetch(apiCall).then((kill) => {
            setKills((kills) => [...kills, kill]);
          });
        });
      });
    }

    // (async () => {
    //   setGame(await fetchGame(gameId));
    //   setKills(
    //     game.kills.map(async (apiCall) => {
    //       return fetch(apiCall);
    //     })
    //   );
    // })();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h2>{game.name}</h2> <Map game={game} kills={kills}></Map>
    </>
  );
};

export default GamePage;
