import React, { useEffect, useState } from "react";
import config from "../../../config.json";
import "./PlayerStatisticStyle.css";

const PlayerStatistic = (props) => {
  const [isLoading, setLoading] = useState(true);
  const gameId = props.gameId;
  const [datas, setData] = useState([]);

  useEffect(() => {
    async function fetchPlayer() {
      await fetch(config.API_URL + "/api/v1/game/" + gameId + "/player")
        .then((response) => response.json())
        .then((datas) => setData(datas));
      setLoading(false);
    }
    fetchPlayer();
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }

  return (
    <>
      <h3>List of players:</h3>
      <ul>
        <li>
          {datas &&
            datas.map((oneData, index) => (
              <h3 key={index}>
                Player's {index + 1} bitecode: {oneData.biteCode}
              </h3>
            ))}
        </li>
      </ul>
    </>
  );
};

export default PlayerStatistic;
