import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Login() {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [KEYCLOAK_URL /*, setKeycloakURL*/] = useState("https://hvz-keycloak-experis.herokuapp.com")
    const [KEYCLOAK_REALM /*, setKeycloakRealm*/] = useState("master")
    const [error, setError] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)
    let history = useHistory();

    // contains the fetch request to login a user
    function loginAttempt() {
        //Set up for fetch request directly to keycloak URL
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        // params required by Keycloak for this endpoint
        const urlencoded = new URLSearchParams();
        urlencoded.append("client_id", "account");
        urlencoded.append("username", username);
        urlencoded.append("password", password);
        urlencoded.append("grant_type", "password");

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        // the 'login' endpoint is /protocol/openid-connect/token of your keycloak url and realm
        fetch(`${KEYCLOAK_URL}/auth/realms/${KEYCLOAK_REALM}/protocol/openid-connect/token`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.error !== "invalid_grant") {
                    // store access token in localstorage
                    localStorage.setItem("token", result.access_token)
                    setLoggedIn(true)
                    console.log(loggedIn)
                    // redirect to 'landing page' page
                    history.push('/games')
                    //window.location.reload();
                }
                else if (result.error === "invalid_grant") {
                    setError("invalid_grant")
                }

            })
            .catch(error => {
                setError("Server")
                console.log(error)
            })
    }

    return (
        <form>
            <h3>Log In</h3>

            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Enter username" onChange={e => setUserName(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
            </div>

            <div className="form-group">
                {error === "Server" && <p>Server Side Error 😪</p>}
                {error === "invalid_grant" && <p>Invalid Credentials 😅</p>}
            </div>

            <button type="button" onClick={loginAttempt} className="btn btn-primary btn-block">Log in</button>
            <p className="forgot-password text-right">
                Need to regsiter? <a href="/register"> click here</a>
            </p>
        </form>
    );

}
