import React, { useState, useEffect } from "react"

function AddNewRun({ currentShoe, setCurrentShoe }) {
    const {locations} = currentShoe
    const [addedMiles, setAddedMiles] = useState("")
    const [addedLocation, setAddedLocation] = useState("")

console.log(locations)

    function handleSubmit(e) {
        e.preventDefault()

        if (e.target["new-miles"].value && e.target["new-location"].value) {

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


//this component only appears if state variable for add run button is true. See "shoe details" component
    return(

        <form type="submit" onSubmit={handleSubmit} className="add-new-run">
            {locations.length > 0 ? 
            <select> {locations.map((each) => <option>{each}</option>)} </select>
            :
            null} 
            <input name="new-location" placeholder="Add New Location" value={addedLocation} onChange={(e) => setAddedLocation(e.target.value)}></input>
            <input name="new-miles" placeholder="Miles" value={addedMiles} onChange={(e) => setAddedMiles(e.target.value)}></input>
            <button id="add-new-run-submit-button">Submit</button>
        </form>

)}

export default AddNewRun