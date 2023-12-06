import React, { useState, useEffect } from "react"

function AddNewRun({ currentShoe, setCurrentShoe }) {
    const {locations} = currentShoe
    const [addedMiles, setAddedMiles] = useState("")
    const [addedLocation, setAddedLocation] = useState("")



    function handleSubmit(e) {
        e.preventDefault()

        if (e.target["new-miles"].value) {

        const newMiles = parseInt(currentShoe.miles) + parseInt(addedMiles)

        const newLocations = locations ? [...locations, addedLocation] : [addedLocation]

        fetch(`http://localhost:3000/shoes/${currentShoe.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                 miles: newMiles,
                 locations: newLocations
            })
        })
        .then(r => r.json())
        .then(data => {
            setCurrentShoe(data),
            currentShoe.miles = newMiles
            currentShoe.locations = newLocations
           })
        }

        setAddedMiles("")
        setAddedLocation("")
    
        
    }



    return(

        <form type="submit" onSubmit={handleSubmit} className="add-new-run">
            {locations ? 
            <select> {locations.map((each) => <option>{each}</option>)} </select>
            :
            null} 
            <input name="new-location" placeholder="Add New Location" value={addedLocation} onChange={(e) => setAddedLocation(e.target.value)}></input>
            <input name="new-miles" placeholder="Miles" value={addedMiles} onChange={(e) => setAddedMiles(e.target.value)}></input>
            <button>Submit</button>
        </form>

)}

export default AddNewRun