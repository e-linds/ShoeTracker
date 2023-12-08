import React from "react"
import AddNewShoe from "./AddNewShoe.jsx"
import { HashLink as Link } from 'react-router-hash-link';


//hashlink import above allows routes to transfer user to different location on the same page, rather than loading a new page
function Header({ setShoes, shoes, setCurrentShoe }) {
    return(
        <div className="header">
            <h1 id="shoetracker-logo">ShoeTracker</h1>
            <div className="topnav">
                <Link to="/home">Home</Link>
                <Link to="/home#all-analytics">Analytics</Link>
                <Link to="/home#fun-stuff-div">Other Fun Stuff</Link>
            </div>
            <AddNewShoe setShoes={setShoes} shoes={shoes} setCurrentShoe={setCurrentShoe}/>
        </div>

    )
}

export default Header