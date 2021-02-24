import React from 'react';

import { ProfileContainer, Image,User } from './styles';

const Profile: React.FC = () => {
  return (
    <ProfileContainer>
      <Image src="https://github.com/diego3g.png" alt="Matheus Alves" />

      <User>
        <strong>Matheus Alves</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level 1
        </p>
      </User>

    </ProfileContainer>
  );
};

export default Profile;
