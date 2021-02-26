import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownConext } from '../../contexts/CountdownContext';

import { ChallangeBoxContainer, Active, NotActive } from './styles';

const ChallengeBox: React.FC = () => {
  const { 
    resetChallenge, activeChallenge, completeChallenge,
  } = useContext(ChallengesContext);

  const { resetCountdown } = useContext(CountdownConext);

  function handleChallengeSucceeded(){
    completeChallenge(); resetCountdown();
  }

  function handleChallengeFalied(){
    resetChallenge(); resetCountdown();
  }


  return (
    <ChallangeBoxContainer>
      {activeChallenge ? (
        <Active>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt={activeChallenge.type} />
            <strong>Novo Desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button type="button" className="failed" onClick={handleChallengeFalied}>
              Falhei
            </button>
            <button type="button" className="success" onClick={handleChallengeSucceeded}>
              Completei
            </button>
          </footer>
        </Active>
      ) : (
        <NotActive>
          <strong>Inicie um ciclo para receber desafios a serem completados</strong>
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
