import React from 'react'
import City from './City'
import './Style.css'

function State({ countryIndex, countries, setCountries }) 
{
    const deleteState = (stateIndex) => {
        if (window.confirm("Are you sure you want to delete this state and its cities?")) {
          const updatedCountries = [...countries];
          updatedCountries[countryIndex].states = updatedCountries[countryIndex].states.filter((_, i) => i !== stateIndex);
          setCountries(updatedCountries);
        }
      };
    
      const addCity = (stateIndex) => {
        const cityName = prompt("Enter city name:");
        if (cityName) {
          const updatedCountries = [...countries];
          updatedCountries[countryIndex].states[stateIndex].cities.push(cityName);
          setCountries(updatedCountries);
        }
      };
    
  return (
    <>
    <div>
       <ul>
      {countries[countryIndex].states.map((state, stateIndex) => (
        <li key={stateIndex}>
          {state.name}
          <button onClick={() => deleteState(stateIndex)} className='btn btn-danger'>Delete</button>
          <button onClick={() => addCity(stateIndex)} className='btn btn-success'>Add City</button>
          <City
            countryIndex={countryIndex}
            stateIndex={stateIndex}
            countries={countries}
            setCountries={setCountries}
          />
        </li>
      ))}
    </ul>
    </div>
    </>
  )
}

export default State
