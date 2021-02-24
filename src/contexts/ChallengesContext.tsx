import React, { useState, createContext, ReactNode } from 'react';
import challenges from '../challenges.json';

interface ChallengeData {
  amount: number
  description: string;
  type: 'body' | 'eye';
}
interface ChallengesContextData {
 level: number;
 levelUp: () => void;
 currentExperience: number;
 challengesComplete: number;
 resetChallenge: () => void;
 startNewChallenge: () => void;
 activeChallenge: ChallengeData;
 experienceToNextLevel: number;
}
interface ChallengesProviderProps { children: ReactNode };

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps ) {
 const [level, setLevel] = useState(1);
 const [activeChallenge, setActiveChallenge] = useState(null);
 const [currentExperience, setCurrentExperience] = useState(0);
 const [challengesComplete, setChallengesComplete] = useState(0);

 const experienceToNextLevel = Math.pow((level + 1) * 4 , 2);

 function levelUp() { setLevel(level + 1) };
 
 function startNewChallenge() { 
  const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
  const challenge = challenges[randomChallengeIndex];

  setActiveChallenge(challenge);
 };

 function resetChallenge() { setActiveChallenge(null) }

 return (
   <ChallengesContext.Provider value={{
     level,
     levelUp,
     currentExperience,
     startNewChallenge,
     challengesComplete,
     activeChallenge,
     resetChallenge,
     experienceToNextLevel
    }}>
    {children}
   </ChallengesContext.Provider>
 )
}

