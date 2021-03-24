import React from "react"
import {Link} from "react-router-dom"
import "./SingleGameStyles.css"

const GameCard = (props) => {

    let gameLink = "/game/" + props.game.id

    return (
        <html>
            <div class="single-card">
            <Link class="link" to={gameLink}>
                <div>
                    <h1>{props.game.name}</h1>
                    <br />
                    <p>Players currently joined: {Object.keys(props.game.players).length}</p>
                </div>
            </Link>
            </div>
        </html>
    )
}

export default GameCard;