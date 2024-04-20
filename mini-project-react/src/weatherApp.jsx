import { useState } from "react";
import SearchBox from "./searchBox";
import InfoBox from "./infoBox";


export default function  WeatherApp(){

const [weatherInfo, setWeatherInfo] = useState({
    city: "Wonderland",
    feelsLike: 27.55,
    humadity: 24,
    maxTemp: 29.05,
    minTemp: 28.95,
    temp: 28.95,
    weather: "haze",
})

let updateInfo =(newInfo) =>{
    setWeatherInfo(newInfo);
}

    return(
        <div>
        <h3> Weather App by Delta </h3>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </div>
    )
}