import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import getAppiKey from './utils/getAppiKey';
import WeatherCard from './components/WeatherCard';
import Loading from './components/Loading';


function App() {
  
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()

  useEffect(() => {

      const success = pos => {
        console.log(pos)
        const objt = {
          lat: pos.coords.latitude,
          lon: pos.coords.longitude
        }
        setCoords(objt)
      }
          navigator.geolocation.getCurrentPosition(success)

  },[])

  useEffect(() => {
    if (coords) {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${getAppiKey()}`;
      axios.get(url)
      .then(res => {
        setWeather(res.data)
        const objTemp = {
          celcius: +(res.data.main.temp - 273.15). toFixed(1),
          farenheit: +((res.data.main.temp - 273.15) * 9/5 + 32).toFixed(1)
        }
        setTemp(objTemp)

      })

      .catch(err => console.log(err))
    }
  }, [coords])


  return (
    <div className='app'>
      {
        weather
        ? <WeatherCard 
            weather={weather} 
            temp={temp}
        />
        : <Loading />
      }
    </div>
  );
}

export default App;
