import { React, useState } from "react";

const RegisterNewUser = () => {

    const [accessToken, setAccessToken] = useState("");
    const [error, setError] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

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

    function sendRegistation() {
        //obtainAccess()
        console.log("registration hasn't been sent as API calls are not implemented here yet...")
    }

    return (
        <>
            <h1>Create new User</h1>

            <form>
                <div>
                    <label>Username:</label>
                    <input type="text" placeholder="Username" required />
                </div>
                <div>
                    <label>First Name:</label>
                    <input type="text" placeholder="First Name" required />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" placeholder="Last Name" required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" placeholder="Email" required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" placeholder="Password" required />
                </div>
                <div>
                    <label>Comfirm Password:</label>
                    <input type="password" placeholder="Confirm Password" required />
                </div>

                <button type="button" onClick={sendRegistation}>Create new User</button>
            </form>

        </>
    )
}

export default RegisterNewUser;