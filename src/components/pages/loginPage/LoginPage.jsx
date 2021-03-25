/*
* This is the login page copied directly from lost-in-translation
* Please remove this comment and change code to work with authentication
*/

import { useState } from 'react'
import { withRouter } from 'react-router-dom'

const LoginPage = ({ history }) => {
    const [text, setText] = useState('')
    /*
    * onSubmit makes 2 actions:
    * Stores user name and a translation array in session storage
    * Changes the view to the next page
    */
    const onSubmit =(e) => {
        e.preventDefault()
        if (!text) {
            alert('Please type a name')
            return
        }
        sessionStorage.setItem('userName', text)
        const transArr = []
        sessionStorage.setItem("transArr", JSON.stringify(transArr))
        setText('')
        history.push('/translate')
        window.location.reload(false)
    }

    return (
        <div className="container">
            <form className='form-input' onSubmit={onSubmit}>
                <div className='name-box'>
                    <label>Please login to continue</label>
                    <input type='text' placeholder='Write your name' value ={text} onChange={(e) => setText(e.target.value)}/>
                </div>
                <input className='btn' type='submit' value='Login' />
            </form>
        </div>
    )
}

export default withRouter(LoginPage)