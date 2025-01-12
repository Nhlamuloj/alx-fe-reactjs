import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css"

const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recentSearches, setRecentSearches] = useState(
    JSON.parse(localStorage.getItem("recentSearches")) || []
  );

  const apiKey = "3aceafa05759260ad4e24517ba7f3e15";  //  API key

  const fetchWeather = async (city) => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`  //  OpenWeatherMap API key
      );
      setWeatherData(response.data);
      setLoading(false);

      // Save to  searches in local storage
      if (!recentSearches.includes(city)) {
        const updatedSearches = [...recentSearches, city];
        setRecentSearches(updatedSearches);
        localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
      }
    } catch (err) {
      setError("City not found or API error");
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      fetchWeather(city);
    }
  };

  const handleSelectRecentSearch = (city) => {
    setCity(city);
    fetchWeather(city);
  };

  return (
    <div className="w-full h-full relative">
      <div className="max-w-lg w-full  bg-green-500 rounded-lg shadow-xl p-6 space-y-4">
        <h1 className="text-2xl font-semibold text-center text--700">
           NJ WeatherApp
        </h1>
        
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex space-x-2">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-blue px-6 py-3 rounded-lg"
          >
            Search
          </button>
        </form>

        {/* Recent Searches */}
        {recentSearches.length > 0 && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-700">Recent Searches</h2>
            <ul className="space-y-2">
              {recentSearches.map((recentCity, index) => (
                <li
                  key={index}
                  onClick={() => handleSelectRecentSearch(recentCity)}
                  className="text-blue-500 cursor-pointer"
                >
                  {recentCity}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Weather Data */}
        {loading && <p className="text-center text-gray-700">Loading...</p>}

        {error && !loading && <p className="text-center text-red-500">{error}</p>}

        {weatherData && !loading && !error && (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-700">
              {weatherData.name}, {weatherData.sys.country}
            </h2>
            <p className="text-xl text-gray-600">{weatherData.weather[0].main}</p>
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              alt={weatherData.weather[0].description}
              className="mx-auto"
            />
            <p className="text-4xl font-semibold text-gray-700">
              {weatherData.main.temp}°C
            </p>
            <p className="text-lg text-gray-500">Humidity: {weatherData.main.humidity}%</p>
            <p className="text-lg text-gray-500">Wind Speed: {weatherData.wind.speed} km/h</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
