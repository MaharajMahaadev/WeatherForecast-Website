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
      console.log(data);
      console.log(data.data);
      useData(data.data);
      const response1 = await fetch('/api/fetchdays', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify(coord)
      });
      const data1 = await response1.json();
      console.log(data1);
      console.log(data1.data);
      useDatadays(data1.data);
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
      <body className='bg-gradient-to-b from-blue-300 to-yellow-200 p-10 w-full'>
        <p>Loading, Please Wait!!!</p>
      </body>
    )
  }

  else {
    return (
      <body className='bg-gradient-to-b from-blue-300 to-yellow-200 p-10 w-full'>
        <div className='inline-flex gap-[25%] items-center w-full p-2'>
          <a href="/" className='w-2/12 font-extrabold text-yellow-200 text-xl p-2 bg-opacity-75'>Weather Forecast</a>
          <Search useCoord={useCoord} usePlace={usePlace}/>
        </div>
        <Som data={data} dataDays={dataDays} place={place}/>
        <LineChart dataDays={dataDays}/>
      </body>
    )
  }
}

export default App
