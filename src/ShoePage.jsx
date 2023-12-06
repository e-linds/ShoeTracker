import React from "react"
import Sidebar from "./Sidebar"
import ShoeDetails from "./ShoeDetails"

function ShoePage({ shoes, currentShoe, setCurrentShoe, deleteShoe }) {
    return (
        <div className="main-page">
        <Sidebar shoes={shoes} currentShoe={currentShoe} setCurrentShoe={setCurrentShoe}/>
        <ShoeDetails currentShoe={currentShoe} setCurrentShoe={setCurrentShoe} deleteShoe={deleteShoe}/>
        </div>
    )
}

export default ShoePage