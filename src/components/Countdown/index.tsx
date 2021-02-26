import React, { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import  { CountdownConext } from '../../contexts/CountdownContext';

import { CountdownContainer, Button } from './styles';

let countdownTimeout: NodeJS.Timeout;

const Countdown: React.FC = () => {
  const {
    second, minutes, isActive, hasFinish,
    startCountdown, resetCountdown,
  } = useContext(CountdownConext);


  const [secondLeft, secondRight] = String(second).padStart(2, '0').split('');
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');

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
          <img src="icons/level.svg" alt="icon" />
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
