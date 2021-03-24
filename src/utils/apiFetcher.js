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
