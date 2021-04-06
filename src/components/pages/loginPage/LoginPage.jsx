import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./LoginStyles.css";

export default function Login() {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [KEYCLOAK_URL /*, setKeycloakURL*/] = useState("https://hvz-keycloak-experis.herokuapp.com")
    const [KEYCLOAK_REALM /*, setKeycloakRealm*/] = useState("users")
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
                    console.log(result)
                    setLoggedIn(true)
                    console.log(loggedIn)
                    console.log(parseJwt(result.access_token).realm_access.roles)
                    // redirect to 'landing page' page
                    history.push('/')
                    window.location.reload()
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
    function parseJwt(token) {
        let base64Url = token.split('.')[1]
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
        let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        }).join(''))

        return JSON.parse(jsonPayload);
    }

    return (
        <div className="centering">
            <h3>Log In</h3>

            <form className="log-form">

                <div className="gridding">
                    <label >Username:</label>
                    <input type="text" placeholder="Enter username" onChange={e => setUserName(e.target.value)} />
                </div>

                <div className="gridding">
                    <label>Password:</label>
                    <input type="password" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
                </div>

                <div className="log-center-btn">
                    <button className="log-submit" type="button" onClick={loginAttempt} >Log in</button>
                </div>

            </form>


            <div className="centering">
                {error === "Server" && <p className="log-warning">Server Side Error...</p>}
                {error === "invalid_grant" && <p className="log-warning">Invalid Credentials!</p>}
            </div>

            <p>Need to regsiter? <a href="/register"> click here</a></p>
        </div>
    );

}
