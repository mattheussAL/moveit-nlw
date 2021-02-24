import styled from 'styled-components';

export const CountdownContainer = styled.div`
 font-family: 'Rajdhani';
 font-weight: 600;

 color: var(--title);

 display: flex;
 align-items: center;

 & > div {
  font-size: 8.5rem;
  text-align: center;

  flex: 1;

  border-radius: 5px;
  background-color: var(--white);
  box-shadow: 0 0 60px rgba( 0, 0, 0, .03);

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  span { flex: 1 }
  span:first-child { border-right: 1px solid #F0F1F3 }
  span:last-child { border-left: 1px solid #F0F1F3 }
 }

 & > span {
  font-size: 6.25rem;
  margin: 0 .5rem;
 }

`;

export const Button = styled.button`
 font-size: 1.5rem;
 font-weight: 600;

 width: 100%;
 height: 5rem;
 margin-top: 2rem;

 color: var(--white);
 border: none;
 border-radius: 5px;
 background-color: var(--blue);

 display: flex;
 align-items: center;
 justify-content:center;

 transition: all .2s ease-in;
 outline: none;

 &:hover {
  background-color: var(--blue-dark);
  transform: scale(1.1);
 }
`;