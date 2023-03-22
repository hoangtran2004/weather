import './App.css';
import Search from "./components/search/Search";
import CurrentWeather from "./components/current-weather/Current-weather";
import {WEATHER_API_KEY, WEATHER_API_URL} from "./api";
import {useState} from "react";
import Forecast from "./components/forecast/Forecast";

function App() {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecastWeather, setForecastWeather] = useState(null);
    const handleOnSearchChange = (searchData) => {
        const [lat, lon] = searchData.value.split(' ');

        const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
        const foreCastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

        Promise.all([currentWeatherFetch, foreCastFetch])
            .then(async (response) => {
                const currentWeatherResponse = await response[0].json();
                const forecastWeatherResponse = await response[1].json();

                setCurrentWeather({city: searchData.label, ...currentWeatherResponse});
                setForecastWeather({city: searchData.label, ...forecastWeatherResponse});
            })
            .catch((err) => console.log(err));
    }
    console.log('curren', currentWeather);
    console.log('weather', forecastWeather);
    return (

        <div className="container">
            <Search onSearchChange={handleOnSearchChange}/>
            {currentWeather && <CurrentWeather data={currentWeather}/>}
            {forecastWeather && <Forecast data={forecastWeather}></Forecast>}
        </div>
    );
}

export default App;
