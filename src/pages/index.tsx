import Head from 'next/head';
import styled from 'styled-components';

// Components
import Profile from '../components/Profile';
import Countdown from '../components/Countdown';
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

const LeftContainer = styled.div`

`;

const RightContainer = styled.div`
  
`;

export default function Home() {
  return(
    <Container>
      <Head>
        <title>Home</title>
      </Head>

      <ExperienceBar />

      <section>
        <LeftContainer>
          <Profile />
          <CompleteChallenges />
          <Countdown />
        </LeftContainer>

        <RightContainer>

        </RightContainer>
      </section>
    </Container>
  )
}