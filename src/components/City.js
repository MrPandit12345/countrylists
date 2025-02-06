import React from 'react'
import './Style.css'

function City({ countryIndex, stateIndex, countries, setCountries }) 
{
    const deleteCity = (cityIndex) => {
        if (window.confirm("Are you sure you want to delete this city?")) {
          const updatedCountries = [...countries];
          updatedCountries[countryIndex].states[stateIndex].cities =
            updatedCountries[countryIndex].states[stateIndex].cities.filter((_, i) => i !== cityIndex);
          setCountries(updatedCountries);
        }
    }    
  return (
    <>
    <div>
     <ul>
      {countries[countryIndex].states[stateIndex].cities.map((city, cityIndex) => (
        <li key={cityIndex}>
          {city}
          <button onClick={() => deleteCity(cityIndex)}className='btn btn-danger'>Delete</button>
        </li>
      ))}
    </ul>
    </div>
    </>
  );
}

export default City
