import React from "react"

function RaceCard({ races, id, name, location, season, website, deleteItem }) {

    return(
        <div id="race-card-container">
            <div id="race-info">
                <h3>{name}</h3>
                <p>{location} | {season}</p>
                <a href={website}>Learn More</a>
            </div> 
            <button className="delete-fun-stuff" id="delete-race" onClick={() => deleteItem(id, races)}>X</button>
        </div>
    )
}

export default RaceCard