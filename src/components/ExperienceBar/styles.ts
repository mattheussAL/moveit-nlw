import styled from 'styled-components';

export const Header = styled.header`
 display: flex;
 align-items: center;
 justify-content: center;

 & > div {
  position: relative;

  height: 4px;
  margin: 0 1.5em;

  border-radius: 4px;
  background: var(--gray-line);

  flex: 1;

  .progress {
   height: 4px;
   border-radius: 4px;
   background: var(--green);
   box-shadow: 0 0 8px var(--green);
   transition: all .3s ease-in;

  }

  .current-experience {
   position: absolute;

   top: 12px;
   transform: translateX(-50%);
  }
 }

 span { font-size: 1rem }

`;
