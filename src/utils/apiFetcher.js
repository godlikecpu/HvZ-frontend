import config from "../config.json";
import axios from "axios";

export const fetchGame = async (gameId) => {
  const data = await axios
    .get(config.API_URL + "/api/v1/game/" + gameId)
    .then((res) => {
      return res.data;
    });
  return data;
};

export const fetch = async (apiCall) => {
  const data = await axios.get(config.API_URL + apiCall).then((res) => {
    return res.data;
  });
  return data;
};

export const postKill = async (
  latitude,
  longitude,
  gameId,
  biteCode,
  story,
  killerId
) => {
  await axios.post("https://hvz-backend-v1.herokuapp.com/api/v1/game/2/kill", {
    timeOfDeath: new Date().toISOString(),
    story,
    latitude,
    longitude,
    game: { id: gameId },
    killer: { id: killerId },
    biteCode,
  });
};

export const postGame = async (
  name,
  northWestLatitude,
  northWestLongitude,
  southEastLatitude,
  southEastLongitude,
  gameState
) => {
  await axios.post("https://hvz-backend-v1.herokuapp.com/api/v1/game", {
    name,
    northWestLatitude,
    northWestLongitude,
    southEastLatitude,
    southEastLongitude,
    gameState,
  });
};
