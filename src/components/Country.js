import React from 'react';
import State from './State';
import './Style.css';

function Country({ countries, setCountries, editCountry, deleteCountry }) 
{
    const addState = (countryIndex) => {
        const stateName = prompt("Enter state name:");
        if (stateName) {
          const updatedCountries = [...countries];
          updatedCountries[countryIndex].states.push({ name: stateName, cities: [] });
          setCountries(updatedCountries);
        }
      };
    
  return (
    <>
    <div>
      <ul>
      {countries.map((country, countryIndex) => (
        <li key={countryIndex}>
          {country.name}
          <br/>
          <button onClick={() => editCountry(countryIndex)}className='btn btn-warning'>Edit</button>
          <button onClick={() => deleteCountry(countryIndex)}className='btn btn-danger'>Delete</button>
          <button onClick={() => addState(countryIndex)}className='btn btn-success'>Add State</button>
          <State
            countryIndex={countryIndex}
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

export default Country
