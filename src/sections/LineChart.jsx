import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const LineGraph = ({dataDays}) => {
  const dayTemps = [];
  const dayDates = [];
  let minTemp = 100, maxTemp = -100;
  dataDays.list.map((state) => {
    dayTemps.push(state.main.temp); 
    dayDates.push(state.dt_txt); 
    minTemp>state.main.temp?(minTemp=state.main.temp):minTemp;
    maxTemp<state.main.temp?(maxTemp=state.main.temp):maxTemp;
  });

  console.log(dayTemps);
  const canvasData = {
    datasets: [
      { 
        borderColor: "white",
        pointRadius: 1.5,
        lineTension: 0.4,
        data: dayTemps,
        borderWidth: 2.5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
        labels: dayDates,
        ticks: {
          color: "white",
          autoSkip: true,        
          maxTicksLimit: 5,
        },
      },
      y: {
        grid: {
          display: false,
        },
        min: minTemp-1,
        max: maxTemp+1,
        ticks: {
          stepSize: 0.5,
          color: "white",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  return (
    <section class="chart-outer">
      <h3 class="section-title">Forecast of Upcoming Days</h3>
      <div class="chart-div">
        <Line options={options} data={canvasData} />
      </div>
    </section>
  );
};

export default LineGraph;