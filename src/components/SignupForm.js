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

    const [message, setMessage] = useState("");

    const sentSignup = () => {
        
        console.log(username)
        axios
            .post
            ("https://red-healthy-basket-clam.cyclic.app/user/signup",{
                username: username,
                password: password,
                phone: "123",
                firstname: "nat",
                lastname: "hi",
                address: address,
                email: email,
                package_id: 0
                
            })
            .then((response) => {
                setMessage(`Thank you for sign up ${name} :)`)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="signupform">
            <h2>One line | Register</h2>
            <div className="signupinput">
                <input className="signupbtn" type="text" placeholder="username"
                    value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input className="signupbtn" type="password" placeholder="password"
                    value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input className="signupbtn" type="text" placeholder="name"
                    value={name} onChange={(e) => setName(e.target.value)}/>
                <input className="signupbtn" type="text" placeholder="address"
                    value={address} onChange={(e) => setAddress(e.target.value)}/>
                <input className="signupbtn" type="text" placeholder="email"
                    value={email} onChange={(e) => setEmail(e.target.value)}/>
                
            </div>
                <button className="signupclick" onClick={() => sentSignup()}>Confirm</button>
                <p className="hi-signup">{message}</p>

        </div>
    )
}

export default SignupForm;