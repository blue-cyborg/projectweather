import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({}); 

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      city: response.data.name,
      temp: response.data.main.temp,
      feel: response.data.main.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let key = "63b79185d21891dc86fad86aa0ab0b0b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          className="Searchbar"
          type="search"
          onChange={updateCity}
          placeholder="Enter your City..."
        />
        <input className="button" type="submit" value="Search" />
        <input className="current" type="submit" value="My Location 📍" />
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>
            The temperature in {weather.city} is {Math.round(weather.temp)}°F
          </li>
          <li>However, it feels like {Math.round(weather.feel)}°F</li>
          <li>The high for today is x</li> 
          <li>the low for today is x</li>
          <li>Wind: {Math.round(weather.wind)}km/h</li>
          <li>Humidity: {Math.round(weather.humidity)}%</li>
          <li>The conditions are: {weather.description}</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
