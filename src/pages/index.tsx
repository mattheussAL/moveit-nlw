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

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesComplete: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider 
      level={props.level} 
      currentExperience={props.currentExperience}
      challengesComplete={props.challengesComplete}
    >
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