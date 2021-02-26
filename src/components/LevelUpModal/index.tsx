import React, { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Overlay, Container } from './styles';

const LevelUpModal: React.FC = () => {
  const { level, closeLevelModal } = useContext(ChallengesContext);


  return (
    <Overlay>
      <Container>
        <header>{level}</header>
        <strong>Parabens</strong>
        <p>Voce alcancou um novo level.</p>
        <button type='button' onClick={closeLevelModal}>
          <img src="/icons/close.svg" alt="fechar"/>
        </button>
      </Container>
    </Overlay>    
  );
};

export default LevelUpModal;
