import React, { useState, useEffect } from "react"

function AddNewRun({ currentShoe, setCurrentShoe }) {
    const {locations} = currentShoe
    const [addedMiles, setAddedMiles] = useState("")
    const [addedLocation, setAddedLocation] = useState("")



    function handleSubmit(e) {
        e.preventDefault()

        if (e.target["new-miles"].value) {


        const newMiles = parseInt(currentShoe.miles) + parseInt(addedMiles)
        const newLocations = [...locations, addedLocation]

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

        <form type="submit" onSubmit={handleSubmit}>
            <input name="new-miles" placeholder="Miles" value={addedMiles} onChange={(e) => setAddedMiles(e.target.value)}></input>
            <br></br>
            <select>
                {locations.map((each) => {
                    return <option>{each}</option>
                })}
            </select>
            <input name="new-location" placeholder="Or, Add New Location" value={addedLocation} onChange={(e) => setAddedLocation(e.target.value)}></input>
            <br></br>
            <button>Submit</button>
        </form>

)}

export default AddNewRun