import styled from 'styled-components';

export const ChallangeBoxContainer = styled.div`
 text-align: center;

 height: 100%;
 padding: 1.5rem 2rem;
 margin-top: .8rem;

 border-radius: 5px;
 background: var(--white);
 box-shadow: 0 0 60px rgba(0,0,0,.05);

 display: flex;
 align-items: center;
 flex-direction: column;
 justify-content: center;
`;

export const Active = styled.div`
 height: 100%;

 display:flex;
 flex-direction:column;

 header {
  font-size: 1.5rem;
  font-weight: 600;

  padding: 0 2rem 1.5rem;
  border-bottom: 1px solid var(--gray-line);

  color: var(--blue);
 }

 main {
  flex: 1;

  display:flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  strong {
   font-size: 2rem;
   font-weight: 600;

   margin: 1.5rem 0 1rem;

   color: var(--title);
  }

  p { line-height: 1.5 }
 }

 footer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  button {
   font-size: 1rem;
   font-weight: 600;

   height: 3rem;

   color: var(--white);

   border: none;
   border-radius: 5px;

   display: flex;
   align-items: center;
   justify-content: center;

   outline: none;
   transition: all .2s ease-in;

   &:hover { 
    filter: brightness(.9);
    transform: scale(1.1);
   }

   &.failed { 
    background: var(--red);
    box-shadow: 4px 4px 4px #cccccc;
   }
   
   &.success { 
    background: var(--green);
    box-shadow: -4px 4px 4px #cccccc;
   }
  }
 }
`;

export const NotActive = styled.div`
 display: flex;
 align-items: center;
 flex-direction: column;

 strong {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.4;
 }

 p {
  line-height: 1.4;

  max-width: 70%;
  margin-top: 3rem;

  display:flex;
  align-items: center;
  flex-direction: column;

  img { margin-bottom: 1rem }
 }
`;