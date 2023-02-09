import React from 'react';

const WeatherComponent = ({ Weather }) => {

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        console.log(Weather.current.condition.text);
        if((Weather.current.condition.text).includes("winter")){
            document.querySelector('body').style = "background:url('https://t3.ftcdn.net/jpg/02/98/03/22/360_F_298032209_YD4pFLDyzMyqBzso5xF5USR05hxqGuXf.jpg');background-size:cover;";
        }else if((Weather.current.condition.text).includes("warm")){
            document.querySelector('body').style = "background:url('https://images.unsplash.com/photo-1589208347862-da0f82461a15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2FybXxlbnwwfHwwfHw%3D&w=1000&q=80');background-size:cover;";
        }else if((Weather.current.condition.text).includes("cloud")){
            document.querySelector('body').style = "background:url('https://i.gifer.com/origin/dd/ddedd3a2f4a3995d8cd1a8ab2033c9ce.gif');background-size:cover;";
        }else if((Weather.current.condition.text).includes("rain")){
            document.querySelector('body').style = "background-image:url('https://assets.cntraveller.in/photos/60b9f464aa65b6af02d24f30/master/pass/rainydaymemory-1366x768.jpg');background-size:cover;";
        }else if((Weather.current.condition.text).includes("Mist")){
            document.querySelector('body').style = "background-image:url('https://c.tenor.com/5ImWLS5QAJgAAAAC/foggy-fog.gif');background-size:cover;";
        }else {
            document.querySelector('body').style = "background-image:url('https://cdn.wallpapersafari.com/25/60/6qx9J7.png');background-size:cover;";
        }

        return `${day} ${date} ${month} ${year}`;
      }

    return (
        <>
            <div id="weatherContainer">
                 <h1 style={{fontSize:"2.5vw",textAlign:"center"}}> {Weather.location.name}, {Weather.location.country} </h1>
                <div><span style={{fontSize:"2vw"}}>{dateBuilder(new Date(Weather.location.localtime))}</span></div>
                <span style={{display:"flex",alignItems:"center",justifyContent:"center"}}> Weather: {Weather.current.condition.text}<img src={`https:${Weather.current.condition.icon}`} alt="weather" style={{width:"15vh"}}/></span>
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
