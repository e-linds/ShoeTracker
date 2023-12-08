import React, { useState } from 'react'
import ShoeBlock from "./ShoeBlock.jsx"

//top bar of shoe images
function Sidebar({ shoes, currentShoe, setCurrentShoe }) {


    return (

    <div id="sidebar">
        {shoes.map((each) => {
            return <ShoeBlock 
            key={each.id}
            shoes={shoes}
            id={each.id}
            image={each.image}
            currentShoe={currentShoe}
            setCurrentShoe={setCurrentShoe}
            />
        })} 
    </div>
    )

}

export default Sidebar