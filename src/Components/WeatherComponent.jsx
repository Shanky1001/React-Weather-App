import React from 'react'

const WeatherComponent = ({ Weather }) => {

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        document.querySelector('#container').style = `background-image:url("https:${Weather.current.condition.icon}");`
        return `${day} ${date} ${month} ${year}`;
      }

    return (
        <>
            <div id="weatherContainer">
                <div> <h1 style={{fontSize:"2.5vw"}}> {Weather.location.name}, {Weather.location.country} </h1>
                <span> <img src={`https:${Weather.current.condition.icon}`} alt="weather" style={{width:"15vh"}} /></span></div>
                <div><span style={{fontSize:"2vw"}}>{dateBuilder(new Date(Weather.location.localtime))}</span></div>
                <div>
                    <div>
                        <i className="fa-solid fa-wind"></i>
                        <span>{Weather.current.wind_kph} kph (<p style={{fontSize:"3vh",display:"inline"}}>Direction : {Weather.current.wind_dir} </p>) </span>
                    </div>
                    <div>
                        <i className="fa-solid fa-cloud"></i>
                        <span>{Weather.current.cloud} %</span>
                    </div>
                </div>
                <div>
                    <div>
                        <i className="fa-solid fa-temperature-high"></i>
                        <span>{Weather.current.temp_c}<sup>o</sup> C </span>
                        <span style={{ fontSize: "2.5vh" }}>Feels like {Weather.current.feelslike_c}<sup>o</sup> C </span>
                    </div>
                    <div>
                        {Weather.current.is_day === 0 ?  <> <i className="fa-solid fa-moon"></i><span>Night</span> </> : <><i className="fa-solid fa-sun"></i> <span>Day</span></>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherComponent