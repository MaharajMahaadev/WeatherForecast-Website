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
        <>
            <input type="text" class="search-input" placeholder="Search for a city..." onChange={funcCities}></input>
            {
                suggestions.length > 0 && (
                    <div className='search-notification'>
                        {suggestions.map((suggestion, index) => (
                            <p key={index} onClick={() => setCity(suggestion)}>{suggestion.Cities}, {suggestion.Country}</p>
                        ))}
                    </div>
                )
            }
        </>
    )
}

export default Search;