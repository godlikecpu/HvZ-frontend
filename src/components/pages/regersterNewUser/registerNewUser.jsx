import { React } from "react";

const RegisterNewUser = () => {

    function sendRegistation() {
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