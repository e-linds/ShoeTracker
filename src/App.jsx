import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./Header.jsx"
import ShoePage from "./ShoePage.jsx"
import MileageAnalytics from "./MileageAnalytics.jsx"


function App() {
  const [shoes, setShoes] = useState([])
  const [currentShoe, setCurrentShoe] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/shoes")
    .then(r => r.json())
    .then(data => setShoes(data))

  }, [])


  return (
    
    <BrowserRouter>
        <Header setShoes={setShoes} shoes={shoes} setCurrentShoe={setCurrentShoe}/>
            <Routes> 
                <Route path="/" element={<ShoePage shoes={shoes} currentShoe={currentShoe} setCurrentShoe={setCurrentShoe}/>}/>   
                <Route path="/mileageanalytics" element={<MileageAnalytics shoes={shoes}/>}/>
            </Routes>
    </BrowserRouter>
    
  )
}

export default App
