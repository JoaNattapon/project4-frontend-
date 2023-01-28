import React, { useEffect, useState } from "react";
import './style.css';
import { BrowserRouter, Routes, Route, Link, Navigation } from 'react-router-dom';
import gsap from "gsap";
import axios from "axios";

const PackageList = () => {

    const [allPacks, setAllPacks] = useState([]);
    // const [buyPack, setBuyPack] = useState();

    const sentPackage = (pack) => {
        // console.log(username)
        axios
            .post("https://red-healthy-basket-clam.cyclic.app/user/buypack", {
                package: pack
            })
            .then((response) => {
                
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {

        axios
            .get("http://localhost:8000/package")
            .then((response) => {
                console.log(response.data.packages)
                // setPacks(response.data.packages)
                setAllPacks(response.data.map((items, i) => (
                    
                    <div className="packs" key={i}>
                        <p>{items.description}</p>
                        <p>{items.price} THB / year</p>
                        <button className="buybtn" onClick={() => sentPackage()}>Buy</button>
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