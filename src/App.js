import React, { Component } from 'react';
import './App.scss';
import './component/Snow/Snow.css';
import './component/Santa/Santa.css';
import './component/Countdown/Countdown.css';
import Snow from './component/Snow/Snow';
import SnowStorm from 'react-snowstorm';
import Santa from './component/Santa/Santa';
import Player from './component/Player/Player';
import Countdown from './component/Countdown/Countdown';


function App() {
  
    document.title = 'NEW YEAR 2020';

  return (
    <div className="App">
       <Countdown 
       timeTillDate="01 01 2020, 00:00 am" 
       timeFormat="MM DD YYYY, h:mm a" 
       />
       <Snow />
       <SnowStorm />
       <Santa />
       <Player />
       
      
    </div>
  );
}

export default App;
