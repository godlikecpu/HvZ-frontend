import InputField from "./InputField";
import { useState } from "react";
import { postGame } from "../../utils/apiFetcher";

const CreateGame = () => {

    const getState = (state, id) => {
        setRequestBody({...requestBody, [id]: state});
    };

    const [requestBody, setRequestBody] = useState(
        {
            name: "", 
            northWestLatitude: "",
            northWestLongitude: "",
            southEastLatitude: "",
            southEastLongitude: "",
            gameState: "REGISTRATION"
        }    
    )

    const createGame = () => {
        postGame(requestBody.name, requestBody.northWestLatitude, requestBody.northWestLongitude,
            requestBody.southEastLatitude, requestBody.southEastLongitude, requestBody.gameState
        );
    };

    return (
      <>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <InputField id="name" getState={getState} placeholder="Write name of the game" />
        <InputField id="northWestLatitude" getState={getState} placeholder="Give North-West Latitude" />
        <InputField id="northWestLongitude" getState={getState} placeholder="Give North-West Longitude" />
        <InputField id="southEastLatitude" getState={getState} placeholder="Give South-East Latitude" />
        <InputField id="southEastLongitude" getState={getState} placeholder="Give South-East Longitude" />
        <button style={{fontSize: 25}} type="button" onClick={createGame}>Create a game</button>
        </div>
      </>
    );
  };
 
export default CreateGame;