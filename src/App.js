
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import WeatherComponent from './Components/WeatherComponent';

var flag = true;
var data = [];
function App() {
  var [location, setLocation] = useState('');
  var [Weather, setWeather] = useState([]);
  var [count, setCount] = useState(false);

  const locate = (e) => {
    if (e.key === 'Enter') {
      fetch(`https://api.weatherapi.com/v1/current.json?key=0bab7dd1bacc418689b143833220304&q=${location}`)
        .then(resp => resp.json())
        .then(data => {
          setWeather(data);
          setCount();
        }).catch(err => {
          document.querySelector('#warning').innerHTML = err;
        });
    }
  }

  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=0bab7dd1bacc418689b143833220304&q=lucknow`)
      .then(resp => resp.json())
      .then(data => {
        setCount(count + 1);
        setWeather(data);
      });
    }, []);


  return (
    <div id='container'>
      <div id='detailsContainer'>
        <h1> Welcome to Weather Finder</h1>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}> <input type="text" onKeyPress={locate} placeholder="Search here" autoFocus id='input' onChange={e => setLocation(e.target.value)} /> <i className="fa-solid fa-magnifying-glass" ></i></div>
      </div>
      { Weather.length !== 0 ?  <WeatherComponent Weather={Weather} /> : ""}
      <div id='warning'></div>
    </div>
  )
}
export default App;

