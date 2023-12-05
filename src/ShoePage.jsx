import React from "react"
import Sidebar from "./Sidebar"
import ShoeDetails from "./ShoeDetails"

function ShoePage({ shoes, currentShoe, setCurrentShoe }) {
    return (
        <div className="main-page">
        <Sidebar shoes={shoes} currentShoe={currentShoe} setCurrentShoe={setCurrentShoe}/>
        <ShoeDetails currentShoe={currentShoe} setCurrentShoe={setCurrentShoe}/>
        </div>
    )
}

export default ShoePage