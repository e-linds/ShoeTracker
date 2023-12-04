import React from 'react'

function ShoeDetails({ currentShoe }) {
    const {name, image, terrain, miles, comments, locations} = currentShoe



    return(
        <div className="shoedetails">
            <div>
                <h2>{name}</h2>
                <p>{terrain}</p>
                <p>{miles ? `${miles} lifetime miles` : null}</p>
                <p>{comments}</p>
                <p>{currentShoe ? "Locations:" : null}</p>
                <ul>{locations?.map((each) => {
                    return <li>{each}</li>})}
                </ul>
                {currentShoe ? <button>Add Run</button>: null}
            </div>
            <img src={image}/>
        </div>
    )
}

export default ShoeDetails