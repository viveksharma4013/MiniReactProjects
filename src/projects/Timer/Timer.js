import './Timer.css';

import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours().toString().split('');
  const minutes = time.getMinutes().toString().split('');
  const seconds = time.getSeconds().toString().split('');

  return (
    <div className='timer'>
        <p className='numbers'>{hours[0]} {hours[1]} : {minutes[0]} {minutes[1]} : {seconds[0]} {seconds[1]}</p>
    </div>
  );
};

export default Timer;
