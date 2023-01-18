import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigation } from 'react-router-dom';
import './style.css';
import axios from "axios";

const LandingPage = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const sentUserPassword = () => {
        console.log(username)
        axios
            .post
            ("http://localhost:8000/users/",{
                username:username,
                password:password,
                name:"testname",
                address:"1234",
                email:"sadofj@sdf",
                
            })
            .then((response) => {
                
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
            
            <Link to='/letsignup' className="signuplink" >First time ! let's sign up</Link>
            <Link to='/' className="signuplink" >all packages</Link>
        </div>
    )
}

export default LandingPage;