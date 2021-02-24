import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { ChallangeBoxContainer, Active, NotActive } from './styles';

const ChallengeBox: React.FC = () => {
  const { 
    activeChallenge,
    resetChallenge,
  } = useContext(ChallengesContext);

  const handleSuccess = ()  => null;

  return (
    <ChallangeBoxContainer>
      {activeChallenge ? (
        <Active>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img 
              src={`icons/${activeChallenge.type}.svg`} 
              alt={activeChallenge.type}
            />
            <strong>Novo Desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button 
              type="button"
              className="failed"
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button 
              type="button"
              className="success"
              onClick={handleSuccess}
            >
              Completei
            </button>
          </footer>
        </Active>
      ) : (
        <NotActive>
          <strong>
            Inicieum ciclo para receber desafios a serem completados
          </strong>
          <p>
            <img src="icons/level-up.svg" alt="level up"/>
            Avance de level completando desafios
          </p>
        </NotActive>
      )}
    </ChallangeBoxContainer>
  );
};

export default ChallengeBox;
