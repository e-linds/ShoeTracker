import React from "react"

function GearCard({ id, name, image, notes, deleteGear}) {

return(
    <div id="gear-card-container">
        <button className="delete-fun-stuff" id="delete-gear" onClick={() => deleteGear(id)}>X</button>
        <img src={image ? image : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"}/>
        <div id="gear-info">
            <h3>{name}</h3>
            <p>{notes}</p>
        </div> 
    </div>
)
}



export default GearCard