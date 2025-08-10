import WeatherIcons from "../utils/WeatherIcons";


export default function WeatherToday({ place, data }){
    const [city, country] = place.split(",", 2);
    const sunRiseTime = new Date(data.sys.sunrise * 1000);
    const sunSetTime = new Date(data.sys.sunset * 1000);

    return(
        <section class="current-weather">
                <div class="weather-hero">
                    <div class="location-info">
                        <h1 class="city-name">{city}</h1>
                        <p class="country">{country}</p>
                        <p class="coordinates">{data.coord.lat}°{data.coord.lat>=0?"N":"S"}, {data.coord.lon}°{data.coord.lon>=0?"E":"W"}</p>
                    </div>
                    <div class="weather-description">
                        <h2 class="condition">{data.weather[0].main}</h2>
                        <p class="description">{data.weather[0].description}</p>
                    </div>
                    <div class="main-temp">
                        <span class="temperature">{(data.main.temp).toFixed(1)}°C</span>
                        <div class="weather-icon">
                            <WeatherIcons type={data.weather[0].id} time={data.dt} />
                        </div>
                    </div>
                </div>
                
                <div class="weather-grid">
                    <div class="weather-card">
                        <div class="card-header">
                            <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M14 4.5v15l7-7-7-7z"/>
                                <path d="M3 4.5v15l7-7-7-7z"/>
                            </svg>
                            <span class="card-title">Feels Like</span>
                        </div>
                        <div class="card-value">{data.main.feels_like.toFixed(0)}°C</div>
                    </div>

                    <div class="weather-card">
                        <div class="card-header">
                            <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M7 16.5 12 11.5l5 5"/>
                                <path d="M7 7.5 12 2.5l5 5"/>
                            </svg>
                            <span class="card-title">High / Low</span>
                        </div>
                        <div class="card-value">{data.main.temp_max.toFixed(0)}°C / {data.main.temp_min.toFixed(0)}°C</div>
                    </div>

                    <div class="weather-card">
                        <div class="card-header">
                            <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M8 2v4"/>
                                <path d="M16 2v4"/>
                                <path d="M21 6H3"/>
                                <path d="M21 10H3"/>
                                <path d="M21 14H3"/>
                                <path d="M21 18H3"/>
                            </svg>
                            <span class="card-title">Pressure</span>
                        </div>
                        <div class="card-value">{data.main.pressure} hPa</div>
                    </div>

                    <div class="weather-card">
                        <div class="card-header">
                            <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 2v6"/>
                                <path d="m4.93 4.93 4.24 4.24"/>
                                <path d="M2 12h6"/>
                                <path d="m4.93 19.07 4.24-4.24"/>
                                <path d="M12 22v-6"/>
                                <path d="m19.07 19.07-4.24-4.24"/>
                                <path d="M22 12h-6"/>
                                <path d="m19.07 4.93-4.24 4.24"/>
                            </svg>
                            <span class="card-title">Humidity</span>
                        </div>
                        <div class="card-value">{data.main.humidity}%</div>
                    </div>

                    <div class="weather-card">
                        <div class="card-header">
                            <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                                <circle cx="12" cy="12" r="3"/>
                            </svg>
                            <span class="card-title">Visibility</span>
                        </div>
                        <div class="card-value">{data.visibility/1000} km</div>
                    </div>

                    <div class="weather-card">
                        <div class="card-header">
                            <svg class="card-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 96 96" enable-background="new 0 0 96 96" xml:space="preserve" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Base" display="none"> </g> <g id="Dibujo"> <path d="M78.485,31.061l-24.001-6c-0.028-0.007-0.058-0.005-0.086-0.011c-0.089-0.018-0.179-0.029-0.27-0.035 c-0.05-0.004-0.099-0.008-0.149-0.008c-0.102,0.002-0.203,0.014-0.304,0.03c-0.038,0.006-0.076,0.008-0.112,0.017 c-0.131,0.029-0.26,0.07-0.385,0.127c-0.007,0.004-0.014,0.005-0.021,0.008c-0.124,0.058-0.244,0.128-0.357,0.213l-8.8,6.6v-6.424 c1.763-0.774,3-2.531,3-4.576c0-2.757-2.243-5-5-5s-5,2.243-5,5c0,2.045,1.237,3.803,3,4.576v50.424H18c-1.104,0-2,0.896-2,2 s0.896,2,2,2h48c1.104,0,2-0.896,2-2s-0.896-2-2-2H44v-36l8.8,6.6c0.108,0.081,0.229,0.125,0.346,0.181 c0.074,0.035,0.14,0.088,0.218,0.114c0.207,0.069,0.421,0.105,0.635,0.105c0,0,0,0,0.001,0h0c0.006,0,0.012-0.002,0.019-0.002 c0.151-0.002,0.301-0.021,0.448-0.056c0.006-0.001,0.012-0.001,0.018-0.002l24.001-6c0.89-0.223,1.515-1.022,1.515-1.94v-6 C80,32.083,79.375,31.283,78.485,31.061z M52,41.001l-6.667-5l6.667-5V41.001z M42,20.001c0.551,0,1,0.448,1,1s-0.449,1-1,1 s-1-0.448-1-1S41.449,20.001,42,20.001z M56,29.562l8,2v8.877l-8,2V29.562z M76,37.439l-8,2v-6.877l8,2V37.439z"></path> </g> </g></svg>
                            <span class="card-title">Wind</span>
                        </div>
                        <div class="card-value">{((data.wind.speed)*(18/5)).toFixed(1)} km/h</div>
                    </div>

                    <div class="weather-card">
                        <div class="card-header">
                            <svg class="card-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 96 96" enable-background="new 0 0 96 96" xml:space="preserve" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Base" display="none"> </g> <g id="Dibujo"> <g> <path d="M48,30c1.104,0,2-0.896,2-2v-4c0-1.104-0.896-2-2-2c-1.105,0-2,0.896-2,2v4C46,29.104,46.895,30,48,30z"></path> <path d="M28,46h-4c-1.105,0-2,0.896-2,2s0.895,2,2,2h4c1.104,0,2-0.896,2-2S29.104,46,28,46z"></path> <path d="M72,46h-4c-1.105,0-2,0.896-2,2s0.895,2,2,2h4c1.104,0,2-0.896,2-2S73.104,46,72,46z"></path> <path d="M66.385,29.615c-0.781-0.781-2.047-0.781-2.828,0l-2.828,2.828c-0.781,0.781-0.781,2.047,0,2.828 c0.391,0.391,0.902,0.586,1.414,0.586s1.023-0.195,1.414-0.586l2.828-2.828C67.166,31.662,67.166,30.396,66.385,29.615z"></path> <path d="M35.271,32.443l-2.828-2.828c-0.781-0.781-2.047-0.781-2.828,0c-0.781,0.781-0.781,2.047,0,2.828l2.828,2.828 c0.391,0.391,0.902,0.586,1.414,0.586s1.024-0.195,1.414-0.586C36.053,34.49,36.053,33.225,35.271,32.443z"></path> <path d="M48,34c-7.72,0-14,6.28-14,14c0,2.449,0.652,4.871,1.888,7.003C36.245,55.62,36.904,56,37.618,56h20.764 c0.714,0,1.373-0.38,1.731-0.997C61.348,52.871,62,50.449,62,48C62,40.28,55.72,34,48,34z M57.157,52H38.843 C38.289,50.738,38,49.375,38,48c0-5.514,4.486-10,10-10c5.514,0,10,4.486,10,10C58,49.375,57.711,50.738,57.157,52z"></path> <path d="M49.414,60.586c-0.781-0.781-2.047-0.781-2.828,0l-6,6c-0.781,0.781-0.781,2.047,0,2.828c0.781,0.781,2.047,0.781,2.828,0 L46,66.828V72c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2v-5.172l2.586,2.586C52.977,69.805,53.488,70,54,70 c0.512,0,1.023-0.195,1.414-0.586c0.781-0.781,0.781-2.047,0-2.828L49.414,60.586z"></path> </g> </g> </g></svg>
                            <span class="card-title">Sunrise</span>
                        </div>
                        <div class="card-value">{sunRiseTime.toLocaleTimeString()}</div>
                    </div>

                    <div class="weather-card">
                        <div class="card-header">
                            <svg class="card-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 96 96" enable-background="new 0 0 96 96" xml:space="preserve" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Base" display="none"> </g> <g id="Dibujo"> <g> <path d="M48,30c1.104,0,2-0.896,2-2v-4c0-1.104-0.896-2-2-2c-1.105,0-2,0.896-2,2v4C46,29.104,46.895,30,48,30z"></path> <path d="M28,46h-4c-1.105,0-2,0.896-2,2s0.895,2,2,2h4c1.104,0,2-0.896,2-2S29.104,46,28,46z"></path> <path d="M72,46h-4c-1.105,0-2,0.896-2,2s0.895,2,2,2h4c1.104,0,2-0.896,2-2S73.104,46,72,46z"></path> <path d="M66.385,29.615c-0.781-0.781-2.047-0.781-2.828,0l-2.828,2.828c-0.781,0.781-0.781,2.047,0,2.828 c0.391,0.391,0.902,0.586,1.414,0.586s1.023-0.195,1.414-0.586l2.828-2.828C67.166,31.662,67.166,30.396,66.385,29.615z"></path> <path d="M35.271,32.443l-2.828-2.828c-0.781-0.781-2.047-0.781-2.828,0c-0.781,0.781-0.781,2.047,0,2.828l2.828,2.828 c0.391,0.391,0.902,0.586,1.414,0.586s1.023-0.195,1.414-0.586C36.053,34.49,36.053,33.225,35.271,32.443z"></path> <path d="M48,34c-7.72,0-14,6.28-14,14c0,2.449,0.652,4.871,1.888,7.003C36.245,55.62,36.904,56,37.618,56h20.764 c0.714,0,1.373-0.38,1.73-0.997C61.348,52.871,62,50.449,62,48C62,40.28,55.72,34,48,34z M57.157,52H38.843 C38.289,50.738,38,49.375,38,48c0-5.514,4.486-10,10-10c5.514,0,10,4.486,10,10C58,49.375,57.711,50.738,57.157,52z"></path> <path d="M52.586,64.586L50,67.172V62c0-1.104-0.896-2-2-2c-1.105,0-2,0.896-2,2v5.172l-2.586-2.586 c-0.781-0.781-2.047-0.781-2.828,0c-0.781,0.781-0.781,2.047,0,2.828l6,6C46.977,73.805,47.488,74,48,74 c0.512,0,1.023-0.195,1.414-0.586l6-6c0.781-0.781,0.781-2.047,0-2.828C54.633,63.805,53.367,63.805,52.586,64.586z"></path> </g> </g> </g></svg>
                            <span class="card-title">Sunset</span>
                        </div>
                        <div class="card-value">{sunSetTime.toLocaleTimeString()}</div>
                    </div>

                    <div class="weather-card">
                        <div class="card-header">
                            <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                                <circle cx="12" cy="10" r="3"/>
                            </svg>
                            <span class="card-title">Sea Level</span>
                        </div>
                        <div class="card-value">{data.main.sea_level} hPa</div>
                    </div>

                    <div class="weather-card">
                        <div class="card-header">
                            <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                            </svg>
                            <span class="card-title">Ground Level</span>
                        </div>
                        <div class="card-value">{data.main.grnd_level} hPa</div>
                    </div>

                    <div class="weather-card">
                        <div class="card-header">
                            <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"/>
                                <polyline points="12,6 12,12 16,14"/>
                            </svg>
                            <span class="card-title">Timezone</span>
                        </div>
                        <div class="card-value">{data.timezone/3600}</div>
                    </div>
                </div>
            </section>
    )
}