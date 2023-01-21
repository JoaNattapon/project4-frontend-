import React, { useEffect, useState } from "react";
import './style.css';
import { BrowserRouter, Routes, Route, Link, Navigation } from 'react-router-dom';
import gsap from "gsap";
import axios from "axios";

const PackageList = () => {

    const [allPacks, setAllPacks] = useState([]);

    useEffect(() => {

        axios
            .get("http://localhost:8000/packages/")
            .then((response) => {
                console.log(response.data.packages)
                // setPacks(response.data.packages)
                setAllPacks(response.data.packages.map((items, i) => (
                    
                    <div className="packs" key={i}>
                        <p>{items.description}</p>
                        <p>{items.price} THB / year</p>
                        {/* <img>{items.image}</img> */}
                        <button className="buybtn">Buy</button>
                    </div>

                )))
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);


    return (
        <div className="pack-card">
            <h2>All Packages</h2>
            <div>
                {allPacks}
            </div>

        </div>
    )
}

export default PackageList;