import React, { useState, useEffect } from 'react';

import { CountdownContainer, Button } from './styles';

const Countdown: React.FC = () => {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const second = (time % 60);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(second).padStart(2, '0').split('');

  const startCountdown = () => setActive(!active)
  
  useEffect(() => {
    if (active === true && time > 0) {
      setTimeout(() => { 
        setTime(time - 1)
      }, 1000)
    }
  }, [active, time])

  return (
    <>
      <CountdownContainer>
        <div>
          <span>{minuteRight}</span>
          <span>{minuteLeft}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondRight}</span>
          <span>{secondLeft}</span>
        </div>
      </CountdownContainer>

      <Button type="button" onClick={startCountdown}>Iniciar um Ciclo</Button>
    </>
  );
};

export default Countdown;
