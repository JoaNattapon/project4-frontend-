import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigation } from 'react-router-dom';
import './style.css';
import gsap from "gsap";
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
            })
            .then((response) => {
                
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // Gsap Animation Apply

    useEffect(() => {
        const heading = document.querySelector(".heading-landingpage")
        const loginInputs = document.querySelectorAll(".logininput")
        const loginBtn = document.querySelector(".loginbtn")
        const signupLinks = document.querySelectorAll(".signuplink p")

        gsap.set(loginInputs, { opacity: 0, y: 20 })
        gsap.set(loginBtn, { opacity: 0, y: 20 })
        gsap.set(signupLinks, { opacity: 0, y: 20 })
        gsap.set(heading, { opacity: 0, scale: 0.2, rotateX: -180})

        const tl = gsap.timeline();

        tl
            .to(loginInputs, { duration: 0.5, opacity: 1, y: 0, stagger: 0.1 })
            .to(loginBtn, { duration: 0.5, opacity: 1, y: 0 }, "-=0.4")
            .to(signupLinks, { duration: 0.5, opacity: 1, y: 0 }, "-=0.4")
            .to(heading, { duration: 1.5,rotateX: 360, opacity: 1, scale: 1}, "=0.1")
    }, []);

    return (
        <div className="landing-header">
            <h2 className="heading-landingpage">Critical Disease Protector</h2>

            <div className="below-header">
                <input className="logininput" type="text" placeholder="username"
                    value={username} onChange={(e) => setUsername(e.target.value)} />
                <input className="logininput" type="password" placeholder="password"
                    value={password} onChange={(e) => setPassword(e.target.value)} />

                <button className="loginbtn" onClick={() => sentUserPassword()}>Login</button>

                <Link to='/letsignup' className="signuplink" ><p>Sign up</p></Link>
                <Link to='/' className="signuplink" ><p>Introduction</p></Link>
                <Link to='/letpackages' className="signuplink" ><p>All packages</p></Link>
            </div>
        </div>
    )
}

export default LandingPage;