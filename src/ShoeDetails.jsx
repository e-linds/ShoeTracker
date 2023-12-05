import React, { useState, useEffect } from 'react'
import AddNewRun from "./AddNewRun"

function ShoeDetails({ currentShoe, setCurrentShoe }) {
    const {name, image, terrain, miles, notes, locations} = currentShoe
    const [addRunButton, setAddRunButton] = useState(false)
    const [buttonColor, setButtonColor] = useState("white")

    

    function handleClick() {
        setAddRunButton(!addRunButton)

    }


    return(
        <div className="shoedetails">
            <div id="complete-details">
                <h2>{name}</h2>
                <p>{terrain}</p>
                <p>{miles ? `${miles} lifetime miles` : null}</p>      
                <h3>{currentShoe ? "Locations" : null}</h3>
                {locations?.map((each) => {
                    return <li>{each}</li>})}
            </div>
            <img src={image}/>
            <div id="notes-and-add-run">
                <h3>{currentShoe ? "Notes" : null}</h3>
                {notes?.map((each) => {
                        return <p>👟{each}</p>})} 
                {currentShoe ? <button onClick={handleClick} id="add-new-run-button">Add Run</button> : null}
                {addRunButton ? <AddNewRun currentShoe={currentShoe} setCurrentShoe={setCurrentShoe}/> : null}
            </div>
        </div>
    )
}

export default ShoeDetails