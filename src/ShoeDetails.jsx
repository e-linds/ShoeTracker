import React, { useState } from 'react'
import AddNewRun from "./AddNewRun"

function ShoeDetails({ currentShoe, setCurrentShoe, deleteShoe }) {
    const {id, name, image, terrain, miles, notes, locations} = currentShoe
    const [addRunButton, setAddRunButton] = useState(false)
    const [notesUpdated, setnotesUpdated] = useState(false)
    // controlled value for notes form
    const [notesValue, setNotesValue] = useState("")


    // function to handle when "Add Run" button is clicked 
    function handleClick() {
        setAddRunButton(!addRunButton)
    }

    let buttonText = addRunButton ? "Close" : "Add Run"

    function handleAddNote(e) {
        e.preventDefault()

        const updatedNotes = currentShoe.notes ? [...currentShoe.notes, notesValue] : [notesValue]
         
        if (notesValue) {

        currentShoe.notes = updatedNotes

        fetch(` http://localhost:3000/shoes/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                  notes: updatedNotes
            })
    }) 

    //dummy state variable to trigger re-render
    setnotesUpdated(!notesUpdated)
    setNotesValue("")
            }
        }


    return(
        <div className="shoedetails">
            {/*first section of the main page: name and location*/}
            <div id="complete-details">
                <h2>{name}</h2>
                <p>{terrain}</p>
                <p>{miles ? `${miles} lifetime miles` : null}</p>      
                <h3>{currentShoe ? "Locations" : null}</h3>
                {locations ? locations.map((each) => {
                    return <li>{each}</li>}) : null}
            </div>
            {/*second section of the main page: image and delete button*/}
            <div id="img-and-delete">
                <img src={image}/>
                {currentShoe ? <button id="deletebutton" onClick={() => deleteShoe(id)}>Delete Shoe</button> : null}
            </div>
            {/*third section of the main page: notes and add run button/form*/}
            <div id="notes-and-add-run">
                <h3>{currentShoe ? "Notes" : null}</h3>
                {notes?.map((each) => {
                        return <p>👟{each}</p>})} 
                {currentShoe ? 
                    <form id="add-note-form" onSubmit={handleAddNote}>
                        <input 
                        id="add-note-input" 
                        name="add-note-input" 
                        placeholder="👟 Enter New Note" 
                        value={notesValue} 
                        onChange={(e) => setNotesValue(e.target.value)}>
                        </input>
                        <button id="add-note-button" type="submit"></button> 
                    </form>
                    : null
                    }                 
                {currentShoe ? <button onClick={handleClick} id="add-new-run-button">{buttonText}</button> : null}
                {/* if state variable addrunButton is true, form component below displays - if not, no form */}
                {addRunButton ? <AddNewRun currentShoe={currentShoe} setCurrentShoe={setCurrentShoe}/> : null}
            </div>
        </div>
        
    )
}

export default ShoeDetails