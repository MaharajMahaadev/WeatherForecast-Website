import React, { useState, useEffect } from 'react'
import LineChart from './sections/LineChart';
import WeatherToday from './sections/WeatherToday'
import WeatherFiveDays from './sections/WeatherFiveDays'
import Navbar from './utils/Navbar';
import { weatherColorsDay, weatherColorsNight } from './utils/data';

function App() {
  const [data, useData] = useState({});
  const [dataDays, useDatadays] = useState({});
  const [bt, useBt] = useState(true);
  const [coord, useCoord] = useState([0, 0]);
  const [ place, usePlace ] = useState('Null Island');

  const val = async () => {
    try {
      const response = await fetch('/api/fetchtemp', 
        {
          method: 'POST',
          headers: { 'Content-Type' : 'application/json'},
          body: JSON.stringify(coord)
        }
      );
      const data = await response.json();
      useData(data);

      const response1 = await fetch('/api/fetchdays', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify(coord)
      });
      const data1 = await response1.json();
      useDatadays(data1);

      /*const response2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coord[0]}&lon=${coord[1]}&units=metric&appid=`);
      const data2 = await response2.json();

      const response3 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coord[0]}&lon=${coord[1]}&units=metric&appid=`)
      const data3 = await response3.json();
      useData(data3);

      useDatadays(data2);
      console.log(data2);*/
    }
    catch (error) {
      console.log(error);
    }
    finally {
      useBt(false);
    }
  }

  useEffect(() => {
    val();
  }, [coord]);

  const [currTime, useCurrTime] = useState("");

  useEffect(() =>  {
    if(data?.dt >= data?.sys?.sunrise && data?.dt < data?.sys?.sunset){
      useCurrTime("day");
    }
    else{
      useCurrTime("night");
    }
  }, [data]);

  if(bt) {
    return (
      <body>
        <div class="forecast-day">
          <p class="section-title">Loading! Please Wait...</p>
        </div>
      </body>
    )
  }

  else {
    return (
      <body>
        <Navbar useCoord={useCoord} usePlace={usePlace} />
        <main class="main-content" style={{backgroundImage: `linear-gradient(${currTime==="night"?"#74b9ff":"#2D3E50"}, ${currTime==="night"?weatherColorsNight[data?.weather[0]?.id]:weatherColorsDay[data?.weather[0]?.id]})`}}>
          <div class="container">
            <WeatherToday data={data} place={place} />
            <WeatherFiveDays dataDays={dataDays} />        
            <LineChart dataDays={dataDays} />
          </div>
        </main>
      </body>
    )
  }
}

export default App
