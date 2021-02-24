import React, { useState, useEffect, useContext } from 'react';
import  { ChallengesContext } from '../../contexts/ChallengesContext';

import { CountdownContainer, Button } from './styles';

let countdownTimeout: NodeJS.Timeout;

const Countdown: React.FC = () => {
  const [time, setTime] = useState(.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinish, setHasFinish] = useState(false);

  const { startNewChallenge } = useContext(ChallengesContext);

  const second = (time % 60);
  const minutes = Math.floor(time / 60);

  const [secondLeft, secondRight] = String(second).padStart(2, '0').split('');
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');

  const startCountdown = () => setIsActive(!isActive);
  const resetCountdown = () => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(.1 * 60);
    startNewChallenge();
  }

  useEffect(() => {
    if (isActive === true && time > 0) {
      countdownTimeout = setTimeout(() => { setTime(time - 1) }, 1000)
    } else {
      if (isActive === true && time === 0) {
        setHasFinish(true); setIsActive(false);
      }
    }
  }, [isActive, time])

  return (
    <>
      <CountdownContainer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </CountdownContainer>

      {hasFinish ? (
        <Button disabled>
          Cicle Encerrado
          <img src="icons/level.svg" alt="icon"/>  
        </Button>
      ) : (
          <>
            {isActive ? (
              <Button 
                type="button" onClick={resetCountdown} className="active"
              > Abandonar Ciclo
              </Button>
             ) : (
                <Button type="button" onClick={startCountdown}>
                  Iniciar Ciclo
                </Button>
             )
            }
          </>
        )
      }



    </>
  );
};

export default Countdown;
