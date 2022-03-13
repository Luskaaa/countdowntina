import './style.css';
import React, { useState, useRef, useEffect } from 'react';

function App() {

  const [dataOfficial, setdataOfficial] = useState(new Date('March 25 2022').getTime())
  const [timeDays, settimeDays] = useState('00')
  const [timeHours, settimeHours] = useState('00')
  const [timeMinutes, settimeMinutes] = useState('00')
  const [timeSeconds, settimeSeconds] = useState('00')
  const [showCredits, setshowCredits] = useState(false)

  let interval = useRef();

  function renderCredits() {
    if (showCredits === true) {
      return (
        <>
          <div className='credits'>
            <span> Lucas Migueis</span>
          </div>
        </>
      )
    }
  }

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

        if (hours < 10) {
          settimeHours('0' + hours);
        } else {
          settimeHours(hours);
        }

        if (minutes < 10) {
          settimeMinutes('0' + minutes);
        }
        else {
          settimeMinutes(minutes);
        }

        if (seconds < 10) {
          settimeSeconds('0' + seconds);
        }
        else {
          settimeSeconds(seconds);
        }

      }

    }, 1000)
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  })

  function renderTimer() {
    return (
      <div className='DisplayTimer'>
        <p className='Days'>{timeDays} Dias</p>
        <p className='Time'>{timeHours} : {timeMinutes} : {timeSeconds}</p>
      </div>
    )

  }

  function handleShowCredits() {
    if (showCredits === true) {
      setshowCredits(false);

    } else {
      setshowCredits(true);

    }
  }


  return (
    <>
      <div className="container">
        <div className='MainTimerContainer'>
          <h1 className='title'>Countdown Tiny Tina's</h1>
          {renderTimer()}
        </div>
        {renderCredits()}
        <button className='ButtonSearch' onClick={handleShowCredits}>
          {showCredits === false ? 'Show Credits' : 'Hide Credits'}
        </button>
      </div>
    </>
  );
}


export default App;
