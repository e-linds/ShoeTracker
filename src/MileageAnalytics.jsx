import React from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

ChartJS.defaults.color = "#fff"

function MileageAnalytics({ shoes }) {

  const labels = shoes.map((each) => {
    return (each.name).toString()
  })

  const mileage = shoes.map((each) => {
    return each.miles  })


  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Mileage',
        data: mileage,
        backgroundColor: [
          "#001f3f",
          "#e75480",
          "#d4af37",
          "#ff5733",
          "#8b4513",
          "#556b2f",
          "#808080"
        ],
        borderColor: [
          "#001f3f",
          "#e75480",
          "#d4af37",
          "#ff5733",
          "#8b4513",
          "#556b2f",
          "#808080"
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
    <div id="bolderboulderspacer">
    <div id="analytics-div">
    <div id="pie-chart">
      <Pie data={data}/>
    </div>
    <div>
      <div id="mileage-percentages-div">
      {shoes.map((each) => {
        return (
          <>
          <h3>{each.name}</h3>
          <p>{each.miles} miles</p>
          <p>{Math.ceil(100 - (each.miles)/500*100)}% life remaining</p>
          </>
          )
              })}
          </div>
    </div>
    </div>
    </div>
    </>
    )
}

export default MileageAnalytics