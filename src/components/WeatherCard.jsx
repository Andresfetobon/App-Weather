/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import './styles/WeatherCard.css'
import { useState } from "react";

const WeatherCard = ({ weather, temp }) => {

    const [isCelcius, setIsCelcius] = useState(true)
    const hidleButtontTemp = () => {
        setIsCelcius(!isCelcius)
    }
    return (
        <article className="weather">
            <header className="weather__header">
                <h1 className="weather__title">Weather App</h1>
                <h2 className="weather__subtitle">{weather?.name}, {weather?.sys.country}</h2>
            </header>
            <section className="weather__body">
                <div className="weather__img">
                    <img src={weather && `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
                </div>
                <div className="weather__info">
                    <h3 className="wather__info__tittle">"{weather?.weather[0].description}"</h3>
                    <ul className="weather__list">
                        <li className="weather__item"><span className="weather__list-label">Wind Speed:</span><span></span> {weather?.wind.speed} m/s</li>
                        <li className="weather__item"><span className="weather__list-label">Clouds:</span><span></span> {weather?.clouds.all}%</li>
                        <li className="weather__item"><span className="weather__list-label">Pressure:</span><span></span> {weather?.main.pressure} hPa</li>
                    </ul>
                </div>
            </section>
                    <footer className="weather__footer">
                        <h2 className="weather__temp">{isCelcius ? `${temp?.celcius} °C` : `${temp?.farenheit} °F` }</h2>
                        <button className="weather__btn" onClick={hidleButtontTemp}>
                            Change to {isCelcius ? '°F' : '°C'}
                        </button>  
                    </footer>
        </article>
    );
};

export default WeatherCard;