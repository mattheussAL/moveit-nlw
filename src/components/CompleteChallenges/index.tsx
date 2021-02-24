import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { ChallengesContainer } from './styles';

const CompleteChallenges: React.FC = () => {
  const { challengesComplete } = useContext(ChallengesContext);

  return (
    <ChallengesContainer>
      <span>Desafios Completos</span>
      <span>{challengesComplete}</span>
    </ChallengesContainer>
  );
};

export default CompleteChallenges;
