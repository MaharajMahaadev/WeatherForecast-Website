import WeatherIcons from "../utils/WeatherIcons";
import { weatherColorsDay } from '../utils/data';

export default function WeatherFiveDays({ dataDays, useUTC = false }) {
  console.log(dataDays);
  const list = Array.isArray(dataDays?.list) ? dataDays.list : [];

  if (list.length === 0) {
    return <div>No forecast dataDays available.</div>;
  }

  const dateKeyFromItem = (item) => {
    const d = new Date(item.dt * 1000);
    return d.toLocaleDateString();
  };

  // Group into Map to preserve API order
  const grouped = list.reduce((map, item) => {
    const key = dateKeyFromItem(item);
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(item);
    return map;
  }, new Map());

  let dayTempAvg = new Map();
  grouped.forEach((value, key) => {
    if(!dayTempAvg.has(key)){
      dayTempAvg.set(key, []);
    }

    let currMax = 0, currMin = 0, curr = 0;

    value.map((val) => {
      curr += 1;
      currMax += val.main.temp_max;
      currMin += val.main.temp_min;
    })

    dayTempAvg.get(key).push((currMin/curr).toFixed(0)+"°/"+(currMax/curr).toFixed(0)+"°");

    console.log(value);
  })

  console.log(grouped);
  console.log(dayTempAvg);

  const formatDayLabel = (key) => {
    // key is YYYY-MM-DD (UTC or local depending on useUTC)
    const d = useUTC
      ? new Date(key + "T00:00:00Z")
      : new Date(key + "T00:00:00");
    return d.toLocaleDateString(undefined, {
      weekday: "long",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (item) => {
    const d = new Date(item.dt * 1000);
    return d.toLocaleTimeString();
  };

  return (
    <section class="forecast-section">
      <h2 class="section-title">7-Day Forecast</h2>
      <div class="forecast-container" id="forecastContainer">
        {Array.from(grouped.entries()).map(([dateKey, items]) => (
          /*<div class="day-header">
            <div class="day-name">{formatDayLabel(dateKey)}</div>
            <div class="day-temp">
              66/75
            </div>
            <div class="day-condition">
              <div class="day-icon">${"Icons"}</div>
              <div class="condition-text">${"Condition"}</div>
            </div>
            <div class="hourly-forecast">
              {items.map((it) => {
                const weather = it.weather?.[0] ?? {};
                // adjust temperature conversion depending on API (OpenWeatherMap default Kelvin; many endpoints return Celsius)
                const tempC =
                  typeof it.main?.temp === "number"
                    ? Math.round(it.main.temp - 273.15)
                    : it.main?.temp;
                return (
                  <div
                    class="hour-item"
                    tabindex="0"
                    aria-label="${formatTime(hour.time)}: ${hour.temp}°, ${hour.condition}"
                  >
                    <div class="hour-time">${8}</div>
                    <div class="hour-icon">${55}</div>
                    <div class="hour-temp">${tempC}°</div>
                  </div>
                );
              })}
            </div>
          </div>*/
          <div class="forecast-day">
            <div class="day-header">
          <h3 class="day-name">{dateKey}</h3>
            <div class="day-temp">
              <svg width="14px" height="14px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 5H3L3 16H5L5 5L8 5V4L4 0L0 4V5Z" fill="#ffffff"></path> <path d="M8 11L11 11L11 0H13L13 11H16V12L12 16L8 12V11Z" fill="#ffffff"></path> </g></svg>
              <span class="temp-high">{(dayTempAvg.get(dateKey))}</span>
            </div>
            </div>
            <div class="day-condition">
              <div class="condition-text">{items.main}</div>
            </div>
        
          
          <div class="hourly-forecast">
            {items.map((it) =>  (
                    <div style={{backgroundImage: `radial-gradient(${weatherColorsDay[it?.weather[0]?.id]} -200%, transparent 200%)`}} class="hour-item">
                      <span class="hour-time">{formatTime(it)}</span>
                      <div class="hour-icon">
                        <WeatherIcons type={it.weather[0].id} time={it.dt} />
                      </div>
                      <span class="hour-temp">{(it.main.temp).toFixed(0)}°C</span>
                      <span class="hour-condition">{it.weather[0].main}</span>
                    </div>
                ))}
            
          </div>
        </div>
        ))}

        
      </div>
    </section>
  );
}
