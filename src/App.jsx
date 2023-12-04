import React, { useState, useEffect } from 'react'
import './App.css'
import Sidebar from "./Sidebar.jsx"
import ShoeDetails from "./ShoeDetails.jsx"
import Header from "./Header.jsx"


function App() {
  const [shoes, setShoes] = useState([])
  const [currentShoe, setCurrentShoe] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/shoes")
    .then(r => r.json())
    .then(data => setShoes(data))

  }, [])

 

  return (
    <>
    <Header setShoes={setShoes} shoes={shoes} setCurrentShoe={setCurrentShoe}/>
    <div className="main-page">
      <Sidebar shoes={shoes} currentShoe={currentShoe} setCurrentShoe={setCurrentShoe}/>  
      <ShoeDetails currentShoe={currentShoe}/>   
    </div>
    </>
  )
}

export default App