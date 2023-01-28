import React, { useEffect, useState } from "react";
import './style.css';
import { BrowserRouter, Routes, Route, Link, Navigation } from 'react-router-dom';
import gsap from "gsap";
import axios from "axios";
import { useParams } from 'react-router';

const Profile = () => {

    const params = useParams()
    const [user, setUser] = useState({})
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [mypackage, setMyPackage] = useState("")

    
    // useEffect(() => {

    //     axios.get(`http://localhost:8000/edit/${params.id}`)
    //     .then(response => {
    //         setUser(response.data)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }, [])

    const edit = (e) => {
        // validateEmail()
        // validatePassword()
        axios
            .put(
                `https://red-healthy-basket-clam.cyclic.app/user/edit`,
                {
                    username: username,
                    password: password,
                    firstname: firstname,
                    lastname: lastname,
                    address: address,
                    email: email,
                    phone: phone,
                    package: mypackage
                },
                {
                    headers: {Authorization: `Bearer ${localStorage.getItem("jwt")}`},
                }
            )
            .then((res) => {
                // console.log(res);
                
            });
    };
    useEffect(() => {
        axios
            .get(`https://red-healthy-basket-clam.cyclic.app/user/getuser`, {
                headers: {Authorization: `Bearer ${localStorage.getItem("jwt")}`},
            })
            .then((res) => {
                console.log(res.data)
                setUsername(res.data.username);
                setPassword(res.data.password);
                setFirstname(res.data.firstname);
                setLastname(res.data.lastname);
                setPhone(res.data.phone);
                setAddress(res.data.address);
                setEmail(res.data.email);
                setMyPackage(res.data.package_id);
            })
            .catch((err) => {
                // console.log(err);
            });
    }, []);


    return(
        <div>
            <h2>{user.name}Profile</h2>
            <form>
            <input className="signupbtn" type="text" value={user.username} defaultValue={username} onChange={(e) => {setUsername(e.target.value)}}/>
            <input className="signupbtn" type="text" value={user.password} defaultValue={password} onChange={(e) => {setPassword(e.target.value)}}/>
            <input className="signupbtn" type="text" value={user.firstname} defaultValue={firstname} onChange={(e) => {setFirstname(e.target.value)}}/>
            <input className="signupbtn" type="text" value={user.lastname} defaultValue={lastname} onChange={(e) => {setLastname(e.target.value)}}/>
            <input className="signupbtn" type="text" value={user.phone} defaultValue={phone} onChange={(e) => {setPhone(e.target.value)}}/>
            <input className="signupbtn" type="text" value={user.address} defaultValue={address} onChange={(e) => {setAddress(e.target.value)}}/>
            <input className="signupbtn" type="text" value={user.email} defaultValue={email} onChange={(e) => {setEmail(e.target.value)}}/>
            <input className="signupbtn" type="text" value={user.mypackage} defaultValue={mypackage} onChange={(e) => {setMyPackage(e.target.value)}}/>
            </form>
        </div>
    )
}

export default Profile;