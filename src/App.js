import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';
import Person from './components/Person/Person';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Person></Person>
      <Countries></Countries>
      <LoadCountries></LoadCountries>
      
    </div>
  );
}

function LoadCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

  return (
    <div>
      <h1>Watching Countries of the World</h1>
      <p>{countries.length}</p>
      
      {countries.map(country=> <Country name={country.name.common} population={country.population}></Country>)}
      

    </div>
  )
}

function Country(props) {
  return(
    <div>
      <h2>Country Name: {props.name}</h2>
      <h4>Population: {props.population}</h4>
    </div>
  )
}

export default App;
