import React, { useState, useEffect, createContext, ReactNode } from 'react';
import challenges from '../challenges.json';
import Cookies from 'js-cookie';

import LevelUpModal from '../components/LevelUpModal';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesComplete: number;
  activeChallenge: Challenge;
  experienceToNextLevel: number;

  levelUp: () => void;
  resetChallenge: () => void;
  closeLevelModal: () => void;
  startNewChallenge: () => void;
  completeChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode
  level: number;
  currentExperience: number;
  challengesComplete: number;
};

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children, ...rest }: ChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
  const [challengesComplete, setChallengesComplete] = useState(rest.challengesComplete ?? 0);


  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => { Notification.requestPermission() }, []);

  useEffect(() => {
    Cookies.set('level', String(level));
    Cookies.set('currentExperience', String(currentExperience));
    Cookies.set('challengesComplete', String(challengesComplete));

  }, [level, currentExperience, challengesComplete])

  function levelUp() { 
    setLevel(level + 1)
    setIsLevelUpModalOpen(true)
  };

  function closeLevelModal() {
    setIsLevelUpModalOpen(false);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play;

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio', {
        body: `Valendo ${challenge.amount}xp`
      })
    }
  };

  function completeChallenge() {
    if (!activeChallenge) { return };

    const { amount } = activeChallenge;
    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience -= experienceToNextLevel;
      levelUp();
    }

    setActiveChallenge(null);
    setCurrentExperience(finalExperience);
    setChallengesComplete(challengesComplete + 1);
  };

  function resetChallenge() {
    setActiveChallenge(null)
  }

  return (
    <ChallengesContext.Provider value={{
      level,
      levelUp,
      resetChallenge,
      activeChallenge,
      closeLevelModal,
      currentExperience,
      startNewChallenge,
      completeChallenge,
      challengesComplete,
      experienceToNextLevel,
    }}>
      {children}


      { isLevelUpModalOpen && <LevelUpModal /> }
    </ChallengesContext.Provider>
  )
}

