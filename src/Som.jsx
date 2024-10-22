import React from "react";

function Som({ data, dataDays, place }) {
    const imgUrl = `https://openweathermap.org/img/wn/${data["weather"][0]["icon"]}@2x.png`;

    function setClouds(val){
        if(val<17){
            return "No Clouds";
        }
        else if(val<34){
            return "Slightly Cloudy";
        }
        else if(val<51){
            return "Moderately Cloudy";
        }
        else if(val<68){
            return "Cloudy";
        }
        else if(val<85){
            return "Very Cloudy";
        }
        else{
            return "Extremely Cloudy";
        }
    }

    function setColor(val){
        console.log(val);
        if(val==='clear sky'){
            return 'yellow-300';
        }
        else if(val==='broken clouds'){
            return 'slate-300';
        }
        else if(val==='scattered clouds'){
            return 'slate-500';
        }
        else if(val==='overcast clouds'){
            console.log(4);
            return 'slate-800';
        }
        else if(val==='light rain'){
            return 'blue-300';
        }
        else if(val==='moderate rain'){
            return 'blue-500';
        }
        else{
            return 'red-300';
        }
    }

    function setSunT(val){
        var myDate = new Date( val *1000);
        return (myDate.toGMTString());
    }

    return (
        <main>
            <div className="grid grid-flow-col grid-cols-3 gap-4 max-w-full mt-10 text-lg font-medium tracking-wide">
                <div className="bg-white bg-opacity-30 mr-4 p-10 object-center pl-10 grid grid-flow-row hover:shadow-2xl capitalize duration-700">
                    <p className="font-bold text-xl">{place}</p>
                    <img src={imgUrl}></img>
                    <p className="font-bold">{data.main.temp} °C</p>
                    <p>{data["weather"][0]["main"]}</p>
                    <p>{data["weather"][0]["description"]}</p>
                    <p>Feels Like: {data.main.feels_like} °C</p>
                </div>
                <div className="bg-white bg-opacity-30 grid grid-flow-row gap-5 text-left p-10 hover:shadow-2xl duration-700">
                    <p>Today's Low: {data.main.temp_min} °C</p>
                    <p>Today's High: {data.main.temp_max} °C</p>
                    <p>Air Pressure: {data.main.pressure} hPa</p>
                    <p>Humidity: {data.main.humidity}%</p>
                    <p>Visibility: {data.visibility/1000} km</p>
                    <p>Wind Speed: {data.wind.speed} m/s</p>
                    <p>{setClouds(data.clouds.all)}</p>
                </div>
                <div className="bg-white bg-opacity-30 grid grid-flow-row gap-5 text-left p-10 hover:shadow-2xl duration-700">
                    <p>Sunrise: {setSunT(data.sys.sunrise)}</p>
                    <p>Sunset: {setSunT(data.sys.sunset)}</p>
                    <p>Timezone: {data.timezone}</p>
                    <p>Sea Level: {data.main.sea_level} hPa</p>
                    <p>Ground Level: {data.main.grnd_level} hPa</p>
                    <p>Longitude: {data.coord.lon}</p>
                    <p>Latitude: {data.coord.lat}</p>
                </div>
            </div>
            <div className="mt-10 min-h-screen overflow-x-auto scrollbar grid grid-flow-col max-w-full text-lg font-normal capitalize tracking-wide">
                {
                    dataDays.list.map((state, index) => (
                    <div className={`bg-${setColor(state.weather[0].description)} bg-opacity-30 min-w-max p-10 m-5 grid grid-flow-row hover:shadow-2xl duration-700`}  key={state.dt}>
                            <p className="font-bold">{state.dt_txt.substring(0, 10)}</p>
                            <img src={`https://openweathermap.org/img/wn/${state.weather[0]["icon"]}@2x.png`}></img>
                            <p className="font-bold">{state.main.temp} °C</p>
                            <p>Humidity: {state.main.humidity}</p>
                            <p>Feels Like: {state.main.feels_like} °C</p>
                            <p>{state.weather[0].description}</p>
                            <p>{state.dt_txt.substring(11)}</p>
                        </div>
                    ))
                }
            </div>
        </main>
    )
}

export default Som;