import { useState } from 'react';
import { GlobalStyles } from '../styles/global';
import { ChallengesProvider } from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }) {
  const [level, setLevel] = useState(1);
  
  function levelUp() { setLevel(level + 1) };

  return (
    <ChallengesProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
