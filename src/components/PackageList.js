import React, { useEffect, useState } from "react";
import './style.css';
import { BrowserRouter, Routes, Route, Link, Navigation } from 'react-router-dom';
import axios from "axios";

const PackageList = () => {

    const [packs, setPacks] = useState('');

    const getPacks = () => {

        axios
            .get
            ("http://localhost:8000/packages/")
            .then((response) => {
                console.log(response)
                setPacks(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    getPacks();

    const allPacks = packs.map((items,i) => {
        return(
            <div className="packs" key={i}>
                <p>{items.description}</p>
                <p>{items.price}</p>
            </div>
        )
    })

    return(
        <div className="pack-card">
            <h2>All Packages</h2>
            <div>
                {allPacks}
            </div>
            
        </div>
    )
}

export default PackageList;