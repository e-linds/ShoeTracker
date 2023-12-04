import React, { useState, useEffect } from 'react'
import AddNewRun from "./AddNewRun"

function ShoeDetails({ currentShoe, setCurrentShoe }) {
    const {name, image, terrain, miles, comments, locations} = currentShoe
    const [addRunButton, setAddRunButton] = useState(false)

 

    function handleClick() {
        setAddRunButton(!addRunButton)
    }


    return(
        <div className="shoedetails">
            <div>
                <h2>{name}</h2>
                <p>{terrain}</p>
                <p>{miles ? `${miles} lifetime miles` : null}</p>
                <p>{currentShoe ? "Comments:" : null}</p>
                <ul>{comments?.map((each) => {
                    return <li>{each}</li>})}
                </ul>
                <p>{currentShoe ? "Locations:" : null}</p>
                <ul>{locations?.map((each) => {
                    return <li>{each}</li>})}
                </ul>
                {currentShoe ? <button onClick={handleClick}>Add Run</button> : null}
                {addRunButton ? <AddNewRun currentShoe={currentShoe} setCurrentShoe={setCurrentShoe}/> : null}
                
            </div>
            <img src={image}/>
        </div>
    )
}

export default ShoeDetails