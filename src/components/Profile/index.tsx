import React, { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import api from '../../services/api';

interface User {
  name: string;
  avatar_url: string
}

import { ProfileContainer, Image,User } from './styles';

const Profile: React.FC = () => {
  const [user, setUser] = useState<User>({} as User);
  const { level } = useContext(ChallengesContext);

  useEffect(() => { showData() }, [])

  async function showData() {
    const res = await api.get('/mattheussAL');  
    setUser(res.data);
  }

  return (
    <ProfileContainer>
      <Image src={`${user.avatar_url}`} alt={user.name} />

      <User>
        <strong>{user.name}</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level {level}
        </p>
      </User>

    </ProfileContainer>
  );
};

export default Profile;
