import React from "react"
import AddNewShoe from "./AddNewShoe.jsx"


function Header({ setShoes, shoes, setCurrentShoe }) {
    return(
        <div className="header">
            <h1 id="shoetracker-logo">ShoeTracker</h1>
            <div className="topnav">
                <a href="http://localhost:5173/">Home</a>
                <a href="http://localhost:5173/mileageanalytics">Mileage Analytics</a>
                <a href="http://localhost:5173/LocationAnalytics">Location Analytics</a>
            </div>
            <AddNewShoe setShoes={setShoes} shoes={shoes} setCurrentShoe={setCurrentShoe}/>
        </div>

    )
}

export default Header