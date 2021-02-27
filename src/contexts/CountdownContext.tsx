import React, {
  useState, useEffect, ReactNode, useContext, createContext
} from 'react';
import { ChallengesContext } from './ChallengesContext';

interface CountdownData {
  second: number;
  minutes: number;
  isActive: boolean;
  hasFinish: boolean;

  startCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownProviderProps { children: ReactNode };

export const CountdownConext = createContext({} as CountdownData);
let countdownTimeout: NodeJS.Timeout;

export function CountDownProvider({ children }: CountdownProviderProps) {
  const [time, setTime] = useState(.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinish, setHasFinish] = useState(false);

  const { startNewChallenge } = useContext(ChallengesContext);

  const second = (time % 60);
  const minutes = Math.floor(time / 60);

  const startCountdown = () => setIsActive(!isActive);
  const resetCountdown = () => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setHasFinish(false);
    setTime(.1 * 60);
  }

  useEffect(() => {
    if (isActive === true && time > 0) {
      countdownTimeout = setTimeout(() => { setTime(time - 1) }, 1000)
    } else {
      if (isActive === true && time === 0) {
        setHasFinish(true);
        setIsActive(false);
        startNewChallenge();
      }
    }
  }, [isActive, time])


  return (
    <CountdownConext.Provider value={{
      second,
      minutes,
      isActive,
      hasFinish,
      startCountdown,
      resetCountdown,
    }}>
      {children}
    </CountdownConext.Provider>
  )
}


