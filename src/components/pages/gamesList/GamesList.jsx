import React, { useEffect, useState } from "react";
import "./GamesListStyles.css"

const Games = ()  => {


    const [isLoading, setLoading] = useState(true)
    const [games, setGames] = useState([])

    //https://hvz-backend-v1.herokuapp.com/api/v1/game/2

    useEffect(async () => {
        await fetch("https://hvz-backend-v1.herokuapp.com/api/v1/game")
            .then(response => response.json())
            .then(data => setGames(data));
        setLoading(false)
    }, []);

    console.log(games[0])

    return (
        <html>
            {isLoading ? <div>Empty</div> : <div>Not Empty</div>}
            {games && <div>{games.name}</div>}
        </html>
    )
}

export default Games;