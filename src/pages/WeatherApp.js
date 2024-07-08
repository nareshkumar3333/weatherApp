import React from 'react';
import WeatherDisplay from '../components/WeatherDisplay';
import WeatherForm from '../components/WeatherForm';

const WeatherPage = () => {
  return (
    <div className="weather-page">
      <WeatherDisplay />
      <WeatherForm/>
    </div>
  );
};

export default WeatherPage;
