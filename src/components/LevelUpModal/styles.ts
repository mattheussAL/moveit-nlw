import styled from 'styled-components';

export const Overlay = styled.div`
 position:fixed;

 top: 0;
 left: 0;
 right: 0;
 bottom: 0;

 background: rgba(242, 243, 245, .8);
 border-bottom: 4px solid var(--green);

 display: flex;
 align-items: center;
 justify-content: center;

 transition: all .3s ease-in;
`;

export const Container = styled.div`
 position: relative;

 text-align: center;

 width: 100%;
 max-width: 400px;

 padding: 2rem 3rem;

 border-radius: 5px;
 background: var(--white);
 box-shadow: 0 0 60px rgba(0, 0, 0, .05);

 header {
  font-size: 8.75rem;
  font-weight: 600;
  color: var(--blue);
  background-image: url('/icons/leveluo.svg') no-repeat center;
  background-size: contain;
 }

 strong {
  font-size: 2.5rem;
  color: var(--title);
 }

 p {
  font-size: 1.25rem;
  color: var(--text);
  margin-top: .25rem;
 }

 button {
  position: absolute;

  font-size: 0;

  top: .5rem;
  right: .5rem;

  border: none;
  background: transparent;
 }
`;










