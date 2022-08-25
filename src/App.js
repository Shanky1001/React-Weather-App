
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
      axios(`https://api.weatherapi.com/v1/current.json?key=0bab7dd1bacc418689b143833220304&q=${location}`)
        .then(resp => {
          document.querySelector('#display').style = 'display:block;'
          document.querySelector('#warning').innerHTML = '';
          setWeather(resp.data);
          setCount(false);
        })
        .catch((error) => {
          document.querySelector('#warning').innerHTML = error.response.data.error.message;
          document.querySelector('#warning').style = "font-size:2.5vw;text-align:center;"
          document.querySelector('#display').style = 'display:none;'
          setCount(true);
        }
        );
    }
  }

  useEffect(() => {
    axios(`https://api.weatherapi.com/v1/current.json?key=0bab7dd1bacc418689b143833220304&q=auto:ip`)
      .then(resp => {
        console.log(resp.data);
        setWeather(resp.data);
        setCount(false);
        document.querySelector('body').style = "background-image:url('https://cdn.wallpapersafari.com/25/60/6qx9J7.png');background-size:cover;";
      })
  }, []);


  return (
    <div id='container'>
      <div id='detailsContainer'>
        <h1> Welcome to Weather Finder</h1>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}> <input type="text" onKeyPress={locate} placeholder="Search with city and state" autoFocus id='input' onChange={e => setLocation(e.target.value)} /> <i className="fa-solid fa-magnifying-glass" ></i></div>
      </div>

      <div id='display'>
        {Weather.length !== 0 ? <WeatherComponent Weather={Weather} /> : <h1 style={{ textAlign: 'center' }}>Api not Working ! Please wait for some time </h1>}

      </div>
      <div id='warning'></div>
    </div>
  )
}
export default App;

