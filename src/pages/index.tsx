import Reat, { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { GetServerSideProps } from 'next';
import { CountDownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

// Components
import Profile from '../components/Profile';
import Countdown from '../components/Countdown';
import ChallengeBox from '../components/ChallengeBox';
import ExperienceBar from '../components/ExperienceBar';
import CompleteChallenges from '../components/CompleteChallenges';

// Icons
import Brightness6Icon from '@material-ui/icons/Brightness6';
import BrightnessMediumIcon from '@material-ui/icons/BrightnessMedium';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';

// Style
const Container = styled.div`
  max-width: 992px;
  height: 100vh;

  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;

  section {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;
  }
`;

const Dark = styled.button`
  position: absolute;

  top: 1.92rem;
  right: 2.5rem;

  color: var(--text);
  border: none;
  background: transparent;

  z-index: 10;
  
  svg {
    background: transparent;
    font-size: 1.8rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 8rem;

    @media (max-width: 1125px) {
      display: none
    }

    &:before, &:after {
      content: '';
      padding: 1px;
      margin: 10px auto;
      height: 80px;
      background: #cccccc;
    }

    li {
      list-style: none;
      margin: .5rem 0 .5rem 0;
      transition: all .3s ease;

      &:hover {
        transform: scale(1.1);
        color: var(--green);
      }
    }
  }

`;

const Help = styled.div`
  width: 60px;
  height: 60px;
  margin-top: 4.5rem;
  border: none;
  border-radius: 50%;
  background: var(--green);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    &:before {
      content: '';
      text-align: center;

      margin-bottom: 100px;
      background: var(--green);
      padding: 4px 20px;
    }
  }

  svg {
    font-size: 2rem;
    position: absolute;
  }
`;

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesComplete: number;
}

export default function Home(props: HomeProps) {
  const [dark, setDark] = useState(false);

  function darkMode() {
    const html = document.querySelector('html');
    const checkbox = document.querySelector('#switch');
    
    checkbox.addEventListener('click', () => {
      html.classList.toggle('dark-mode')
      setDark(!dark);
    })
  }

  return (
    <ChallengesProvider 
      level={props.level} 
      currentExperience={props.currentExperience}
      challengesComplete={props.challengesComplete}
      >

      <Dark type="button" id="switch" className="dark" onClick={darkMode}>
        {dark ? <Brightness6Icon /> : <BrightnessMediumIcon />}
        <ul>
          <li><a href="https://github.com/mattheussAL"><GitHubIcon /></a></li>
          <li><LinkedInIcon /></li>
          <li><a href="https://linkedin.com/in/matheus-alves-dos-santos"><TwitterIcon /></a></li>
        </ul>

        <Help><LiveHelpIcon/></Help>
      </Dark>


      <Container>
      <Head>
        <title>Home</title>
      </Head>

      
      <ExperienceBar />

      <CountDownProvider>
        <section>
          <div>
            <Profile />
            <CompleteChallenges />
            <Countdown />
          </div>

          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountDownProvider>
    </Container>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { 
    level,
    currentExperience,
    challengesComplete
  } = context.req.cookies;

  return {
    props: { 
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesComplete: Number(challengesComplete)
    }
  }
};