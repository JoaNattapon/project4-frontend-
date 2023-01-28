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
    useEffect((e) => {
        // e.preventDefault();
        axios
            .get(`https://red-healthy-basket-clam.cyclic.app/user/getuser`, {
                headers: {Authorization: `Bearer ${localStorage.getItem("jwt")}`},
            })
            .then((res) => {
                console.log(res.data)
                setDetail([
                    <div>
                        <h2>{user.name}Profile</h2>
                        <form>
                            <label>
                                Username :
                                <input className="signupbtn" type="text" value={user.username} defaultValue={res.data.username} onChange={(e) => { setUsername(e.target.value) }} />
                            </label>
                            <label>
                                Firstname :
                                <input className="signupbtn" type="text" value={user.firstname} defaultValue={res.data.firstname} onChange={(e) => { setFirstname(e.target.value) }} />
                            </label>
                            <label>
                                Lastname :
                                <input className="signupbtn" type="text" value={user.lastname} defaultValue={res.data.lastname} onChange={(e) => { setLastname(e.target.value) }} />
                            </label>
                            <label>
                                Phone :
                                <input className="signupbtn" type="text" value={user.phone} defaultValue={res.data.phone} onChange={(e) => { setPhone(e.target.value) }} />
                            </label>
                            <label>
                                Address :
                                <input className="signupbtn" type="text" value={user.address} defaultValue={res.data.address} onChange={(e) => { setAddress(e.target.value) }} />
                            </label>
                            <label>
                                Email :
                                <input className="signupbtn" type="text" value={user.email} defaultValue={res.data.email} onChange={(e) => { setEmail(e.target.value) }} />
                            </label>
                            <label>
                                Package bought :
                                <input className="signupbtn" type="text" value={user.mypackage} defaultValue={res.data.mypackage} onChange={(e) => { setMyPackage(e.target.value) }} />
                            </label>
                        </form>
                        <button className="signupclick" onClick={() => edit()}>Confirm</button>
                    </div>
                ])
                setUsername(res.data.username);
                setPassword(res.data.password);
                setFirstname(res.data.firstname);
                setLastname(res.data.lastname);
                setPhone(res.data.phone);
                setAddress(res.data.address);
                setEmail(res.data.email);
                setMyPackage(res.data.package);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    return(
        <div>
            {detail}
        </div>
    )
}

export default Profile;