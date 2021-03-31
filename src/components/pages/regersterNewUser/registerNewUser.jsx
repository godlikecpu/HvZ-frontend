import { React, useState } from "react";
import "./registerNewUserStyles.css";

const RegisterNewUser = () => {

    const [passwordMatch, setPasswordMatch] = useState(true)
    const [accessToken, setAccessToken] = useState("");
    const [error, setError] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");


    function sendRegistration(event) {
            event.preventDefault();
            let password1 = document.getElementById("password").value;
            let password2 = document.getElementById("password-confirm").value;

            if (password1 !== password2) {
                setPasswordMatch(false);
            } else if (password1 === password2) {
                console.log("registration hasn't been sent as API calls are not implemented here yet...")
            }
    }
    function obtainAccess(){
        const KEYCLOAK_URL = "https://hvz-keycloak-experis.herokuapp.com"
        const KEYCLOAK_REALM = "master"
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        const urlencoded = new URLSearchParams();
        urlencoded.append("grant_type", "client_credentials");
        urlencoded.append("client_id", "admin-cli");
        urlencoded.append("client_secret", "26037886-e3d1-4698-9668-b787acd06418");

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch(`${KEYCLOAK_URL}/auth/realms/${KEYCLOAK_REALM}/protocol/openid-connect/token`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.error !== "invalid_grant") {
                    setAccessToken(result.access_token)
                    newUser()
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

    function newUser(){

            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", "Bearer");

            const rawBody = `{"firstName":${firstName},"lastName":${lastName},"email":${email},"enabled":"true","username":${username},"credentials":[{"type": "password", "value": ${password},"temporary":false}]}`

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: rawBody,
                redirect: 'follow'
            };


            fetch(`https://hvz-keycloak-experis.herokuapp.com/auth/admin/realms/users/users`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    if (result.error !== "invalid_grant") {
                        console.log("It worked!")
                    }
                    else if (result.error === "invalid_grant") {
                        setError("invalid_grant")
                        console.log("invalid_grant")
                    }

                })
                .catch(error => {
                    setError("Server")
                    console.log(error)
                })
    }

    return (
        <>
            <h1 className="reg-title">Create new User</h1>
            <div className="reg-centering">
                <form className="reg-form" onSubmit={sendRegistration}>
                    <div>
                        <label>Username:</label>
                        <input id="username" type="text" placeholder="Username" required />
                    </div>
                    <div>
                        <label>First Name:</label>
                        <input id="fname" type="text" placeholder="First Name" required />
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input id="lname" type="text" placeholder="Last Name" required />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input id="email" type="email" placeholder="Email" required />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input id="password" type="password" placeholder="Password" required />
                    </div>
                    <div>
                        <label>Comfirm Password:</label>
                        <input id="password-confirm" type="password" placeholder="Confirm Password" required />
                    </div>

                    {passwordMatch ? <div></div> : <h4 className="warning" >Passwords does not match!</h4>}
                    <div className="reg-centering">
                        <input className="reg-submit" type="submit" value="Create new User" />
                    </div>
                </form>
            </div>

        </>
    )
}

export default RegisterNewUser;