import React, { useState } from "react";
import "./registerNewUserStyles.css";

const RegisterNewUser = () => {

    const [passwordMatch, setPasswordMatch] = useState(true)

    function sendRegistation(event) {
        event.preventDefault();
        let password1 = document.getElementById("password").value;
        let password2 = document.getElementById("password-confirm").value;

        if (password1 !== password2) {
            setPasswordMatch(false);
        } else if (password1 === password2) {
            console.log("registration hasn't been sent as API calls are not implemented here yet...")
        }
    }

    return (
        <>
            <h1 className="reg-centering">Create new User</h1>
            <div className="reg-centering">
                <form className="reg-form" onSubmit={sendRegistation}>
                    <div className="gridding">
                        <label>Username:</label>
                        <input id="username" type="text" placeholder="Username" required />
                    </div>
                    <div className="gridding">
                        <label>First Name:</label>
                        <input id="fname" type="text" placeholder="First Name" required />
                    </div>
                    <div className="gridding">
                        <label>Last Name:</label>
                        <input id="lname" type="text" placeholder="Last Name" required />
                    </div>
                    <div className="gridding">
                        <label>Email:</label>
                        <input id="email" type="email" placeholder="Email" required />
                    </div>
                    <div className="gridding">
                        <label>Password:</label>
                        <input id="password" type="password" placeholder="Password" required />
                    </div>
                    <div className="gridding">
                        <label>Comfirm Password:</label>
                        <input id="password-confirm" type="password" placeholder="Confirm Password" required />
                    </div>

                    {passwordMatch ? <div></div> : <h4 className="warning" >Passwords does not match!</h4>}
                    <div className="reg-center-btn">
                        <input className="reg-submit" type="submit" value="Create new User" />
                    </div>
                </form>
            </div>

        </>
    )
}

export default RegisterNewUser;