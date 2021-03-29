import React, { useEffect, useState } from 'react';
import config from "../../config.json";
import "./GameStatisticsStyle.css";

import PlayerStatistic from "../game-statistics/PlayerStatistic/PlayerStatistic";

const GameStatistics = (props) =>{
    const [isLoading, setLoading] = useState(true);
    const gameId = props.gameId;
    const [stats, setStats] = useState();

  useEffect(() => {
        async function fetchStatistics(){
            await fetch(config.API_URL + "/api/v1/game/" + gameId)
                .then((response) => response.json())
                .then((data) => setStats(data))
            setLoading(false);
        }
        fetchStatistics();
    }); 

    if (isLoading) {
        return (
          <>
            <div>Loading...</div>
          </>
        );
    } 

    return (
        <>
            <div className="row">
                <div className="column">
                    <h3>Game state: {stats.gameState}</h3>
                    <h3>North-West: {stats.northWestLatitude} °, {stats.northWestLongitude}° </h3>
                    <h3>South-East: {stats.southEastLatitude} °, {stats.southEastLongitude}° </h3>
                </div>
                <div className="column">
                    <PlayerStatistic gameId = {gameId}/>
                </div>
            </div>
        </>
    ); 
};


export default GameStatistics;