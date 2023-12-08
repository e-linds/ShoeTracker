import React from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale,
  LinearScale,
  BarElement,
  Title, } from 'chart.js';
import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(ArcElement, CategoryScale,
  LinearScale,
  BarElement,
  Title, Tooltip, Legend);

ChartJS.defaults.color = "#fff"

function Analytics({ shoes }) {

  //data for mileage piechart -------------------------------------------
  const labels = shoes.map((each) => {
    return (each.name).toString()
  })

  const mileage = shoes.map((each) => {
    return each.miles  })


  const pieChartData = {
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

  
  
//data for locations chart ---------------------------------
  const numOfLocations = shoes.map((each) => {
    return each.locations.length  })

const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    responsive: true,
    plugins: {
      legend: 
      {
        position: 'Locations',
    },
  }};
  
  const colors = [
    "#001f3f",
    "#e75480",
    "#d4af37",
    "#ff5733",
    "#8b4513",
    "#556b2f",
    "#808080"
  ]
  
  const barchartData = {
    labels,
    datasets: [
      {
        label: "# of Locations",
        data: numOfLocations.map((each) => each ),
        borderColor: colors.map((each) => each),
        backgroundColor: colors.map((each) => each),
        barThickness: 40          }
    ],
  };

 

  return (
  
    <div id="all-analytics">
        <h1 id="analytics-title">Analytics</h1>
        <div id="analytics-div">
          <div id="charts">
              <div id="pie-chart">
                  <Pie data={pieChartData}/>
              </div>
              <div className="details-box" id="details-box-piechart">
                <p className="details-box-header">{"⬅️ Lifetime miles per shoe "}</p>
                <p className="resources-list"><strong>Resources:</strong>
                  <br></br>
                  <a href="https://www.rei.com/learn/expert-advice/replace-shoes.html" target="_blank">REI</a>
                  <br></br>
                  <a href="https://marathonhandbook.com/when-to-replace-running-shoes/" target="_blank">Marathon Handbook</a>
                  <br></br>
                  <a href="https://treadlabs.com/blogs/insoles-reach-your-stride/34786373-what-are-your-running-shoes-trying-to-tell-you" target="_blank">TreadLabs</a>
                </p>
              </div>
              <div className="details-box" id="details-box-barchart">
              <p className="details-box-header">{" Number of locations run in per shoe ➡️"}</p>
              <p className="resources-list"><strong>Resources:</strong>
                  <br></br>
                  <a href="https://www.runnersworld.com/news/a20859873/these-are-the-top-running-cities-according-to-strava/" target="_blank">Runner's World: Cities with most runners</a>
                  <br></br>
                  <a href="https://www.runnersworld.com/news/a43162278/best-cities-for-runners/" target="_blank">Runner's World: Best cities for runners</a>
                  <br></br>
                  <a href="https://www.vacationraces.com/" target="_blank">Vacation Races</a>
                </p>
              </div>
              <div id="barchart">
                  <Bar options={options} data={barchartData}/> 
              </div>
          </div>
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

    )
}

export default Analytics