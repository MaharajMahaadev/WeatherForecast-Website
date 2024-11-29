import React, { useState } from "react";
import cities from "./data";

function Search({ useCoord, usePlace }) {
    const [suggestions, setSuggestions] = useState([]);

    const funcCities = (e) => {
        const currCity = e.target.value;

        const filSuggestions = [];

        if (currCity.length > 0) {
            cities.forEach((city) => {
                const matchesCities = city.cities.filter((cityVal) =>
                    cityVal.toLowerCase().startsWith(currCity.toLowerCase()));

                matchesCities.forEach((city1) => {
                    filSuggestions.push({ Cities: city1, Country: city.country, iso2: city.iso2 });
                });
            });

            setSuggestions(filSuggestions);
        }
        else {
            setSuggestions([]);
        }
    }

    async function setCity(temp) {
        setSuggestions([]);
        usePlace(temp.Cities + "," + temp.Country);

        try {
            const response = await fetch('/api/fetchiso', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({city: temp.Cities, iso2: temp.iso2})
            });
            const res = await response.json();
            useCoord([res[0].lat || 0, res[0].lon] || 0);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className=''>
            <input className="border-2 border-yellow-100 focus:ring-yellow-100 focus:ring-1 focus:outline-none" placeholder="Search Cities" onChange={funcCities} type="search"></input>
            {
                suggestions.length > 0 && (
                    <ul className='bg-blue-100 bg-opacity-95 z-10 absolute overflow-scroll h-[70vh]'>
                        {suggestions.map((suggestion, index) => (
                            <li key={index} onClick={() => setCity(suggestion)} className='m-1 cursor-pointer'>{suggestion.Cities}, {suggestion.Country}</li>
                        ))}
                    </ul>
                )
            }
        </div>
    )
}

export default Search;