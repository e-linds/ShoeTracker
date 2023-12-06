import React, { useState, useEffect } from 'react'
import AddNewRun from "./AddNewRun"
import { json } from 'react-router-dom'

function ShoeDetails({ currentShoe, setCurrentShoe, deleteShoe }) {
    const {id, name, image, terrain, miles, notes, locations} = currentShoe
    const [addRunButton, setAddRunButton] = useState(false)
    const [notesUpdated, setnotesUpdated] = useState(false)
    const [notesValue, setNotesValue] = useState("")


    function handleClick() {
        setAddRunButton(!addRunButton)

    }


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
            <div id="complete-details">
                <h2>{name}</h2>
                <p>{terrain}</p>
                <p>{miles ? `${miles} lifetime miles` : null}</p>      
                <h3>{currentShoe ? "Locations" : null}</h3>
                {locations?.map((each) => {
                    return <li>{each}</li>})}
            </div>
            <div id="img-and-delete">
                <img src={image}/>
                {currentShoe ? <button id="deletebutton" onClick={() => deleteShoe(id)}>Delete Shoe</button> : null}
            </div>
            <div id="notes-and-add-run">
                <h3>{currentShoe ? "Notes" : null}</h3>
                {notes?.map((each) => {
                        return <p>👟{each}</p>})} 
                {currentShoe ? 
                    <form id="add-note-form" onSubmit={handleAddNote}>
                        <input 
                        id="add-note-input" 
                        name="add-note-input" 
                        placeholder="👟 Add Note" 
                        value={notesValue} 
                        onChange={(e) => setNotesValue(e.target.value)}>
                        </input>
                        <button id="add-note-button" type="submit">Go</button> 
                    </form>
                    : null
                    } 
                                       
                {currentShoe ? <button onClick={handleClick} id="add-new-run-button">Add Run</button> : null}
                {addRunButton ? <AddNewRun currentShoe={currentShoe} setCurrentShoe={setCurrentShoe}/> : null}
            </div>
        </div>
    )
}

export default ShoeDetails