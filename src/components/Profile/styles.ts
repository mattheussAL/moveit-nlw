import styled from 'styled-components';

export const ProfileContainer = styled.div`
 display: flex;
 align-items: center;
 margin-top: 1.5rem;
`;

export const Image = styled.img`
 width: 5.5rem;
 height: 5.5rem;
 border: none;
 border-radius: 50%;

 box-shadow: 0 0 15px #cccccc;
 cursor: pointer;
`;

export const User = styled.div`
 margin-left: 1.5rem;

 strong {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--title);
 }

 p {
  font-size: 1rem;
  font-weight: 600;

  margin-top: .5rem;

  color: var(--title);

  img {
   margin-right: .5rem;
  }
 }
`;