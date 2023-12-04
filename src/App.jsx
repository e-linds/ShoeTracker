import React, { useState, useEffect } from 'react'
import './App.css'
import Sidebar from "./Sidebar.jsx"
import ShoeDetails from "./ShoeDetails.jsx"
import Header from "./Header.jsx"
// import MileageAnalytics from "./MileageAnalytics.jsx"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Hoka Clifton 7", "Brooks Launch", "La Sportiva Jackals"],
  datasets: [
    {
      label: 'Mileage',
      data: [12, 19, 3],
      backgroundColor: [
        "#3a4664",
        "#eaa0a2",
        "ffdbdc"
      ],
      borderColor: [
        "#3a4664",
        "#eaa0a2",
        "ffdbdc"
      ],
      borderWidth: 1,
    },
  ],
};


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
      <Sidebar shoes={shoes} currentShoe={currentShoe} setCurrentShoe={setCurrentShoe} />  
      <ShoeDetails currentShoe={currentShoe} setCurrentShoe={setCurrentShoe}/>   
      <Pie data={data}/>
    </div>
    </>
  )
}

export default App
