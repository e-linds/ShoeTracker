import React from "react"

function GearCard({ name, image, notes}) {

    console.log(image)

return(
    <div id="gear-card-container">
        <img src={image ? image : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"}/>
        <div id="gear-info">
            <h3>{name}</h3>
            <p>{notes}</p>
        </div> 
    </div>
)
}



export default GearCard