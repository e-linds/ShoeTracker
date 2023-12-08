import React, { useState, useEffect} from "react"
import RaceCard from "./RaceCard"
import GearCard from "./GearCard"


function OtherFunStuff() {
  const [races, setRaces] = useState([])
  const [gear, setGear] = useState([])
  const [newRaceButton, setNewRaceButton] = useState(false)
  const [newGearButton, setNewGearButton] = useState(false)

//both gear and races db.json data is loaded in the two useEffects below
  useEffect(() => {
    fetch("http://localhost:3000/races")
    .then(r => r.json())
    .then(data => setRaces(data))

    }, [])

    useEffect(() => {
      fetch("http://localhost:3000/gear")
    .then(r => r.json())
    .then(data => setGear(data))
    }, [])

    //open new race form
  function handleAddRaceClick() {
    setNewRaceButton(!newRaceButton)
  }

  //open new gear form
  function handleAddGearClick() {
    setNewGearButton(!newGearButton)
  }

  function handleAddRaceSubmit(e) {
    e.preventDefault()

    if (e.target["race-name"].value) {

    const newRace = {
      name: e.target["race-name"].value,
      location: e.target["race-location"].value,
      season: e.target["race-season"].value,
      website: e.target["race-website"].value
    }

    fetch("http://localhost:3000/races", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newRace)
    })

    setRaces([...races, newRace])
    setNewRaceButton(!newRaceButton)


  }

  }

  function handleAddGearSubmit(e) {
    e.preventDefault()

    if (e.target["gear-name"].value) {

    const newGear = {
      name: e.target["gear-name"].value,
      image: e.target["gear-image"].value,
      notes: e.target["gear-notes"].value,
    }

    fetch("http://localhost:3000/gear", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newGear)
    })

    setGear([...gear, newGear])
    setNewGearButton(!newGearButton)

  }

  }


  function deleteRace (raceId) {
    const newArray = races.filter((each) => {
      return each.id !== raceId
    })


    fetch(`http://localhost:3000/$races/${raceId}`, {
      method: "DELETE"
    })

    setRaces(newArray) 

  }

  function deleteGear (gearId) {
    const newArray = gear.filter((each) => {
      return each.id !== gearId
    })


    fetch(`http://localhost:3000/gear/${gearId}`, {
      method: "DELETE"
    })

    setGear(newArray)
  }

 

  return(
  <div id="fun-stuff-div">
      <div id="fun-stuff-header">
          <button onClick={handleAddGearClick}>Add New Gear</button>
          <button onClick={handleAddRaceClick}>Add New Race</button>
          <h1>Other Fun Stuff</h1>
          {/*if the gear form is open the race form can't open, and vice versa*/}
          {newGearButton && !newRaceButton ? 
          <form type="submit" onSubmit={handleAddGearSubmit} className="fun-stuff-form" id="add-gear-form">
              <input name="gear-name" placeholder="Name"></input>
              <input name="gear-image" placeholder="Image"></input>
              <textarea name="gear-notes" placeholder="Notes"></textarea>
              <button>Submit</button>
          </form>
          :
          null}
          {newRaceButton && !newGearButton ? 
          <form type="submit" onSubmit={handleAddRaceSubmit} className="fun-stuff-form" id="add-race-form">
              <input name="race-name" placeholder="Name"></input>
              <input name="race-location" placeholder="Location"></input>
              <input name="race-season" placeholder="Season"></input>
              <input name="race-website" placeholder="Website"></input>
              <button>Submit</button>
          </form>
          :
          null}
      </div>
      <div id="fun-stuff-container">
          <div>
            <div id="running-gear-container">
                <h2>Running Gear</h2>
                    {gear.map((each) => {
                      return <GearCard 
                      key={each.id}
                      id={each.id}
                      name={each.name}
                      image={each.image}
                      notes={each.notes}
                      gear={gear}
                      setGear={setGear}       
                      deleteGear={deleteGear}         
        
                      />
                    })}
            </div> 
          </div>   
          <div>
            <div id="races-container">
                <h2>Races to Run</h2>
                    {races.map((each) => {
                      return <RaceCard 
                      key={each.id}
                      id={each.id}
                      name={each.name}
                      location={each.location}
                      season={each.season}
                      website={each.website} 
                      races={races}
                      setRaces={setRaces}  
                      deleteRace={deleteRace}         
                      />
                    })}
            </div>    
        </div>  
      </div>
  </div>
        
    )
}


export default OtherFunStuff