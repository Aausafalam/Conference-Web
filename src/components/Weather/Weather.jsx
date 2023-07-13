import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moderateIcon from "../../assets/Group 175.png";
import partiallyCloudyIcon from "../../assets/Group 176.png";
import sunsetIcon from "../../assets/Group 179.png";
import sunriseIcon from "../../assets/Group 180.png";
import HighIcon from "../../assets/Vector.png";
import "./Weather.css";

const Weather = () => {

  const [day, setDay] = useState([]);
  const [pointDay, setPointDay] = useState(0);
  const [weatherData, setWeatherData] = useState(null);
  const currentDayIndex = new Date().getDay(); 
  

  useEffect(() => {

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const updatedDays = [
      "Today",
      ...daysOfWeek.slice(currentDayIndex + 1),
      ...daysOfWeek.slice(0, currentDayIndex + 1)
    ];

    updatedDays.pop()

    setDay(updatedDays);

  }, []);

  useEffect(() => {

    const fetchWeatherData = async () => {
      try {
        const apiKey = '6d7aba04109f4cdabb4105918230206'; // Replace with your weather API key
        const response = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Agra,Uttar%20Pradesh,India&days=7`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();

  }, []);

  const handleDayClick = (index) => {

    setPointDay(index);
    
  };

  return (
    <div className="weather_div">
      <div className="weather_header">
        <div className="weather_header_location">
          <div className="weather_location_icon">
            <svg width="21" height="30" viewBox="0 0 21 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 30C10.5 30 0 16.305 0 10.5C-2.05469e-08 9.12112 0.271591 7.75574 0.799265 6.48182C1.32694 5.20791 2.10036 4.05039 3.07538 3.07538C4.05039 2.10036 5.20791 1.32694 6.48182 0.799265C7.75574 0.271591 9.12112 0 10.5 0C11.8789 0 13.2443 0.271591 14.5182 0.799265C15.7921 1.32694 16.9496 2.10036 17.9246 3.07538C18.8996 4.05039 19.6731 5.20791 20.2007 6.48182C20.7284 7.75574 21 9.12112 21 10.5C21 16.305 10.5 30 10.5 30ZM10.5 13.5C11.2956 13.5 12.0587 13.1839 12.6213 12.6213C13.1839 12.0587 13.5 11.2956 13.5 10.5C13.5 9.70435 13.1839 8.94129 12.6213 8.37868C12.0587 7.81607 11.2956 7.5 10.5 7.5C9.70435 7.5 8.94129 7.81607 8.37868 8.37868C7.81607 8.94129 7.5 9.70435 7.5 10.5C7.5 11.2956 7.81607 12.0587 8.37868 12.6213C8.94129 13.1839 9.70435 13.5 10.5 13.5Z" fill="#3B3B3B"/>
            </svg>
          </div> 
          <h1><span>Agra, </span>  <br/>Uttar Pradesh, INDIA</h1>
        </div>
        <div className="weather_header_date">
          <div className="weather_date_icon">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 25.5C0 28.05 1.95 30 4.5 30H25.5C28.05 30 30 28.05 30 25.5V13.5H0V25.5ZM25.5 3H22.5V1.5C22.5 0.6 21.9 0 21 0C20.1 0 19.5 0.6 19.5 1.5V3H10.5V1.5C10.5 0.6 9.9 0 9 0C8.1 0 7.5 0.6 7.5 1.5V3H4.5C1.95 3 0 4.95 0 7.5V10.5H30V7.5C30 4.95 28.05 3 25.5 3Z" fill="#3B3B3B"/>
            </svg>
          </div>
          <h1>
  <span>{day[pointDay]}</span> <br /> {weatherData && weatherData?.forecast?.forecastday[pointDay]?.date}
</h1>
        </div>
      </div> 
      <div className="weather_details">
        <div className="weather_details_day">
          {day?.map((data, index) => (
            <p className={pointDay === index ? "day" : ""} onClick={() => handleDayClick(index)} key={index}>
              {data}
            </p>
          ))}
        </div>
        <div className="weather_details_list">
          {weatherData && (
            <>
              <div className="weather_details_item">
                <img src={moderateIcon} alt="rer" />
                <p>Moderate</p>
                <h4>{weatherData?.forecast?.forecastday[pointDay]?.day?.maxwind_kph} km/h | {weatherData?.forecast?.forecastday[pointDay]?.day?.wind_dir}</h4>
              </div>
              <div className="weather_details_item">
                <img src={partiallyCloudyIcon} alt="rer" />
                <p>{weatherData?.forecast?.forecastday[pointDay]?.day?.condition.text}</p>
                <h4>{weatherData?.forecast?.forecastday[pointDay]?.day?.avgtemp_c}°C</h4>
              </div>
              <div className="weather_details_item">
                <img src={HighIcon} alt="rer" />
                <p>High</p>
                <h4>{weatherData?.forecast?.forecastday[pointDay]?.day?.avghumidity} %</h4>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="weather_details_list2">
        <div className="weather_details_item">
          <img src={sunsetIcon} alt="rer" />
          <p>Sunset</p>
          <h4>{weatherData && weatherData?.forecast?.forecastday[pointDay]?.astro?.sunset}</h4>
        </div>
        <div className="weather_details_item">
          <img src={sunriseIcon} alt="rer" />
          <p>Sunrise</p>
          <h4>{weatherData && weatherData?.forecast?.forecastday[pointDay]?.astro?.sunrise}</h4>
        </div>
      </div>
    </div>
  );
};

export default Weather;
