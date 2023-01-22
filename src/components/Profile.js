import React, { useEffect, useState } from "react";
import './style.css';
import { BrowserRouter, Routes, Route, Link, Navigation } from 'react-router-dom';
import gsap from "gsap";
import axios from "axios";

const Profile = () => {

    const [user, setUser] = useState({})

    
    
    useEffect(() => {
        axios.get("http://localhost:8000/users/<int:pk>")
        .then(response => {

        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return(
        <div>
            <h2>{user.name}Profile</h2>
            <input className="signupbtn" type="text" value={user.username} />
            <input className="signupbtn" type="text" value={user.password} />
            <input className="signupbtn" type="text" value={user.name} />
            <input className="signupbtn" type="text" value={user.address} />
            <input className="signupbtn" type="text" value={user.email} />
            <input className="signupbtn" type="text" value={user.package} />
            
        </div>
    )
}

export default Profile;