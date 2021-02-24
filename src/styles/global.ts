import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 :root {
  --red:            #E83F5B;
  --text:           #666666;
  --title:          #2E384D;
  --green:          #4CD62B;
  --blue:           #5965E0;
  --white:          #FFFFFF;
  --gray-line:      #DCDDE0;
  --blue-dark:      #4953B8;
  --background:     #F2F3F5;
  --blue-twitter:   #2AA9E0;
  --text-highlight: #B3B9FF;
 }

 * {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
 }

 @media (max-width: 1080px) { html { font-size: 93.75% } }
 @media (max-width: 720px) { html { font-size: 87.5% } }


 body, input, textarea, button {
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
 }
 
 body {
  background: var(--background);
  color: var(--text);
 }

 button {
  cursor: pointer;
  outline: none;
 }

 a {
  color: inherit;
  text-decoration: none;
 }

 .container {
  height: 100vh;
  margin: 0 auto;
  max-width: 992px;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
 }

`;
