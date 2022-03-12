import './style.css';
import React, { useState, useRef, useEffect } from 'react';

function App() {

  const [dataOfficial, setdataOfficial] = useState(new Date('March 25 2022').getTime())
  const [timeDays, settimeDays] = useState('00')
  const [timeHours, settimeHours] = useState('00')
  const [timeMinutes, settimeMinutes] = useState('00')
  const [timeSeconds, settimeSeconds] = useState('00')

  let interval = useRef();

  const startTimer = () => {

    interval = setInterval(() => {
      const now = new Date().getTime();

      const remaingDays = dataOfficial - now;

      const days = Math.floor(remaingDays / (1000 * 60 * 60 * 24));
      const hours = Math.floor(remaingDays % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const minutes = Math.floor((remaingDays % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remaingDays % (1000 * 60)) / 1000);

      if (remaingDays < 0) {
        clearInterval(interval.current);
      } else {
        settimeDays(days);
        settimeHours(hours);
        settimeMinutes(minutes);
        settimeSeconds(seconds);
      }

    }, 1000)
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  })

  return (

    <div className="container">

      <div className='MainTimerContainer'>
        <h1 className='title'>Countdown Tiny Tina's</h1>
        <div className='DisplayTimer'>
          <p className='Days'>{timeDays} Dias</p>
          <p className='Time'>{timeHours} : {timeMinutes} : {timeSeconds}</p>
        </div>
      </div>

      <div className='credits'>
        <span> Lucas Migueis</span>
      </div>

    </div>
  );
}


export default App;
