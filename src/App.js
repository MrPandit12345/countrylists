import { useState } from "react";
import Country from "./components/Country";

function App() {
    const [countries, setCountries] = useState([]);

  const addCountry = () => {
    const countryName = prompt("Enter country name:");
    if (countryName) {
      setCountries([...countries, { name: countryName, states: [] }]);
    }
  };

  const editCountry = (index) => {
    const newName = prompt("Enter new country name:", countries[index].name);
    if (newName && window.confirm("Are you sure you want to update this country?")) {
      const updatedCountries = [...countries];
      updatedCountries[index].name = newName;
      setCountries(updatedCountries);
    }
  };

  const deleteCountry = (index) => {
    if (window.confirm("Are you sure you want to delete this country and its states?")) 
    {
      const updatedCountries = countries.filter((_, i) => i !== index);
      setCountries(updatedCountries);
    }
  };

  return (
    <>
        <div className='container'>
        <h1 style={{textAlign:'center',margin:'15px'}} className="text-decoration-underline">Country,State And City Management</h1>
        <button onClick={addCountry} className="btn btn-secondary">Add Country</button>
        <Country
            countries={countries}
            setCountries={setCountries}
            editCountry={editCountry}
            deleteCountry={deleteCountry}
        />
      </div>
    </>
  );
}

export default App;
