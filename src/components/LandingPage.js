import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigation } from 'react-router-dom';
import './style.css';
import axios from "axios";

const LandingPage = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const sentUserPassword = () => {

        axios
            .post
            ("https://localhost:8000/users/")
            .then((response) => {
                
                setUsername(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
        
        axios
            .post
            ("https://localhost:8000/users/")
            .then((response) => {
                
                setPassword(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="landing-header">
            <h2>Critical Disease Protector</h2>

            <input className="signupinput" type="text" placeholder="username"
            value={username} onChange={(e) => setUsername(e.target.value)} />
            <input className="signupinput" type="text" placeholder="password"
            value={password} onChange={(e) => setPassword(e.target.value)} />

            <button className="loginbtn" onClick={() => sentUserPassword()}>Login</button>     
            
            <a className="signuplink" href="">First time ! let's sign up</a>
        </div>
    )
}

export default LandingPage;