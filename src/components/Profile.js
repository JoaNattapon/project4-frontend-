import React, { useEffect, useState } from "react";
import './style.css';
import { BrowserRouter, Routes, Route, Link, Navigation } from 'react-router-dom';
import gsap from "gsap";
import axios from "axios";
import { useParams } from 'react-router';

const Profile = () => {

    const [user, setUser] = useState({})
    const [detail, setDetail] = useState([])
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [mypackage, setMyPackage] = useState("")



    const edit = (e) => {
        e.preventDefault();
        console.log(phone + "test");
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
                    package_id: mypackage
                },
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
                }
            )
            .then((res) => {


            });
    };
    useEffect((e) => {
        // e.preventDefault();
        console.log(username);
        axios
            .get(`https://red-healthy-basket-clam.cyclic.app/user/getuser`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
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
                console.log(err);
            });
    }, []);

    return (
        <div>
            <div className="userprofile">
                <h2>User Profile</h2>

                <form onSubmit={(a) => {
                    a.preventDefault();
                    console.log(phone + "test");
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
                                // package_id: mypackage
                            },
                            {
                                headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
                            }
                        )
                        .then((res) => {

                        });
                    }}>
                    <div className="wrapper">

                        <div className="box">
                            <input type="text" value={username} defaultValue={username} onChange={(e) => { setUsername(e.target.value) }} />
                            <label>Username</label>
                        </div>

                        <div className="box">
                            <input type="text" value={firstname} defaultValue={firstname} onChange={(e) => { setFirstname(e.target.value) }} />
                            <label>Firstname</label>
                        </div>

                        <div className="box">
                            <input type="text" value={lastname} defaultValue={lastname} onChange={(e) => { setLastname(e.target.value) }} />
                            <label>Lastname</label>
                        </div>

                        <div className="box">
                            <input type="text" value={phone} defaultValue={phone} onChange={(e) => { setPhone(e.target.value) }} />
                            <label>Phone</label>
                        </div>

                        <div className="box">
                            <input type="text" value={address} defaultValue={address} onChange={(e) => { setAddress(e.target.value) }} />
                            <label>Address</label>
                        </div>

                        <div className="box">
                            <input type="text" value={email} defaultValue={email} onChange={(e) => { setEmail(e.target.value) }} />
                            <label>Email</label>
                        </div>

                        <div className="box">
                            <input type="text" value={mypackage} defaultValue={mypackage} onChange={(e) => { setMyPackage(e.target.value) }} />
                            <label>My package</label>
                        </div>

                    </div>
                    <button className="signupclick" type="submit">Confirm</button>
                </form>
            </div>
        </div>
    )
}

export default Profile;