import React, { useEffect, useState } from "react";
import './style.css';
import { BrowserRouter, Routes, Route, Link, Navigation } from 'react-router-dom';
import axios from "axios";

const SignupForm = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");

    const sentSignup = () => {
        
        console.log(username)
        axios
            .post
            ("http://localhost:8000/users/",{
                username: username,
                password: password,
                name: name,
                address: address,
                email: email,
                
            })
            .then((response) => {
                
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="signupform">
            <h2>One line | Sign up</h2>
            <div className="signupinput">
                <input className="signupbtn" type="text" placeholder="username"
                    value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input className="signupbtn" type="text" placeholder="password"
                    value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input className="signupbtn" type="text" placeholder="name"
                    value={name} onChange={(e) => setName(e.target.value)}/>
                <input className="signupbtn" type="text" placeholder="address"
                    value={address} onChange={(e) => setAddress(e.target.value)}/>
                <input className="signupbtn" type="text" placeholder="email"
                    value={email} onChange={(e) => setEmail(e.target.value)}/>
                
            </div>
                <button className="signupclick" onClick={() => sentSignup()}>Signup</button>

        </div>
    )
}

export default SignupForm;