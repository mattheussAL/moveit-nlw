import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Header } from './styles';

const ExperienceBar: React.FC = () => {
  const { 
    currentExperience,
    experienceToNextLevel
  } = useContext(ChallengesContext);

  const percentToNextLevel = Math.floor(
    (currentExperience * 100) / experienceToNextLevel
  );

  return (
    <Header>
      <span>0 xp</span>

      <div>
        <div 
          className="progress" 
          style={{ width: `${percentToNextLevel}%`}} 
        />
        <span 
          className="current-experience" 
          style={{ left: `${percentToNextLevel}%`}}
        >
          {currentExperience} xp
        </span>
      </div>

      <span>{experienceToNextLevel} xp</span>
    </Header>
  );
};

export default ExperienceBar;
