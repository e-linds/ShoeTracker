import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./Header.jsx"
import ShoePage from "./ShoePage.jsx"
import Analytics from "./Analytics.jsx"
import OtherFunStuff from "./OtherFunStuff.jsx"


function App() {
  const [shoes, setShoes] = useState([])
  const [currentShoe, setCurrentShoe] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/shoes")
    .then(r => r.json())
    .then(data => setShoes(data))

  }, [])

  

  function deleteShoe (shoeId) {
    
    const newArray = shoes.filter((each) => {
      return each.id !== shoeId
    })

    fetch(`http://localhost:3000/shoes/${shoeId}`, {
      method: "DELETE"
    })

    setShoes(newArray)
    setCurrentShoe("")

  }


  return (
    
    <BrowserRouter>
        <Header setShoes={setShoes} shoes={shoes} setCurrentShoe={setCurrentShoe}/>
            <Routes> 
                <Route path="/home" element={<ShoePage shoes={shoes} currentShoe={currentShoe} setCurrentShoe={setCurrentShoe} deleteShoe={deleteShoe}/>}/>   
            </Routes>
            <div id="bolderboulderspacer"></div>
            <Routes>
                <Route path="/home" element={<Analytics shoes={shoes}/>}/>
            </Routes>     
            <div id="spacer2"></div>
            <Routes>
                <Route path="/home" element={<OtherFunStuff shoes={shoes}/>}/>
            </Routes>       
            
            
    </BrowserRouter>
    
  )
}

export default App
