import React from "react"

function RaceCard({ races, setRaces, id, name, location, season, website }) {



    return(
        <div id="race-card-container">
            <div id="race-info">
                <h3>{name}</h3>
                <p>{location} | {season}</p>
                <a href={website}>Learn More</a>
            </div> 
        </div>
    )
}

export default RaceCard