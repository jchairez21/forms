import React, { useState } from 'react'

const HookForm = (props) => {
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")
    // ----


    // ----
    return (
        <div>
            <form>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={(e) => setfirstName(e.target.value)} />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => setlastName(e.target.value)} />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={(e) => setconfirmPassword(e.target.value)} />
                </div>
            </form>
            <p>Your From Data</p>
            FirstName = {firstName}
            <br />
            LastName = {lastName}
            <br />
            Email = {email}
            <br />
            Password = {password}
            <br />
            Confirm Password = {confirmPassword}
        </div>
    )
}

export default HookForm
