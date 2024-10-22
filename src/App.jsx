import React, { useState, useEffect } from 'react'
import Som from "./Som";
import Search from "./Search";
import LineChart from './LineChart';

function App() {
  const [data, useData] = useState({});
  const [dataDays, useDatadays] = useState({});
  const [bt, useBt] = useState(true);
  const [coord, useCoord] = useState([0, 0]);
  const [ place, usePlace ] = useState('Null Island');

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coord[0]}&lon=${coord[1]}&units=metric&appid=d79e73e2c2c8e10dc60ec01e43211e51`;
  const urlDays = `https://api.openweathermap.org/data/2.5/forecast?lat=${coord[0]}&lon=${coord[1]}&units=metric&appid=d79e73e2c2c8e10dc60ec01e43211e51`;

  const val = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      useData(data);
      const response1 = await fetch(urlDays);
      const data1 = await response1.json();
      useDatadays(data1);
    }
    catch (error) {
      console.log(error);
    }
    finally {
      useBt(false);
    }
  }

  useEffect(() => {
    val()
  }, [coord]);

  if (bt) {
    return (
      <p>Load Load Load!!!</p>
    )
  }

  else {
    return (
      <body className='bg-gradient-to-b from-blue-300 to-yellow-200 p-10 w-full'>
        <div className='inline-flex justify-between items-center w-full p-2'>
          <p className='w-2/12 font-extrabold bg-yellow-200 p-2 bg-opacity-75'>Weather Forecast</p>
          <Search useCoord={useCoord} usePlace={usePlace}/>
          <button className='bg-yellow-200 w-1/12 p-2 bg-opacity-75'>Maps</button>
        </div>
        <Som data={data} dataDays={dataDays} place={place}/>
        <LineChart dataDays={dataDays}/>
      </body>
    )
  }
}

export default App
