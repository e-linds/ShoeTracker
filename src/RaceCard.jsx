import React from "react"

function RaceCard({ races, id, name, location, season, website, deleteRace }) {

    return(
        <div id="race-card-container">
            <div id="race-info">
                <h3>{name}</h3>
                <p>{location} | {season}</p>
                <a href={website}>Learn More</a>
            </div> 
            <button className="delete-fun-stuff" id="delete-race" onClick={() => deleteRace(id)}>X</button>
        </div>
    )
}

export default RaceCard