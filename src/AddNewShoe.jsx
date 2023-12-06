import React, { useState } from "react"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"

function AddNewShoe({ setShoes, shoes, setCurrentShoe }) {
    const [openDialog, setOpenDialog] = useState(false)

    function handleClickOpen() {
        setOpenDialog(true)
    }

    function handleClickClose() {
        setOpenDialog(false)
    }

    function handleSubmit(e) {
        e.preventDefault()

        const newShoe = {
            name: e.target.name.value.charAt(0).toUpperCase() + e.target.name.value.slice(1),
            image: (e.target.image.value ? e.target.image.value : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"),
            terrain: e.target.terrain.value.charAt(0).toUpperCase() + e.target.terrain.value.slice(1),
            miles: e.target.miles.value        
        }

        if (newShoe.name) {

        fetch("http://localhost:3000/shoes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newShoe)
        })
        .then(r => r.json())
        .then(data => setShoes([...shoes, data]), setCurrentShoe(newShoe)
        
        )



       

      setShoes([...shoes, newShoe])

    }

    }


    return(
        <>
        <button id="add-new-shoe-button" onClick={handleClickOpen}>Add New Shoe</button>
        <Dialog onClose={handleClickClose} open={openDialog}>
            <DialogTitle id="add-new-shoe-form-title">Add New Shoe</DialogTitle>
            <form type="submit" id="add-new-form" onSubmit={(e) => handleSubmit(e)}>
                <input name="name" placeholder="Name"></input>
                <br></br>
                <input name="image" placeholder="Image"></input>
                <br></br>
                <select name="terrain" placeholder="Terrain">
                    <option>All-Terrain</option>
                    <option>Road</option>
                    <option>Trail</option>
                    <option>Speed</option>
                </select>
                <br></br>
                <input name="miles" placeholder="Lifetime Miles"></input>
                <br></br>
                <button type="submit" onClick={handleClickClose} id="add-new-shoe-form-button">Add</button>
            </form>
        </Dialog>
        </>
    

    )
}

export default AddNewShoe