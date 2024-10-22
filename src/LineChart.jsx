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
        borderColor: "skyblue",
        pointRadius: 1.5,
        lineTension: 0.4,
        data: dayTemps,
        borderWidth: 2.5,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        labels: dayDates,
        ticks: {
          color: "black",
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
          color: "black ",
        },
      },
    },
    maintainAspectRatio: true,
    responsive: true,
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
    <div className="min-w-[100%] min-h-[100vh] bg-white bg-opacity-30 p-10 mt-5 hover:shadow-2xl duration-700">
      <p className="m-5 font-bold text-2xl">ForeCast of Upcoming Days</p>
      <Line options={options} data={canvasData} />
    </div>
  );
};

export default LineGraph;