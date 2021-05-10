import React, { useState, useEffect } from 'react';
import { Container, Content, Greeting, UserName, UserImg } from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import profileImg from '../../assets/lucas.png';

const Header: React.FC = () => {
  const [userName, setUsername] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem('@plantmanager:user');
      setUsername(user || '');
    }

    loadStorageUserName();
  });

  return (
    <Container>
      <Content>
        <Greeting>Olá,</Greeting>
        <UserName>{userName}</UserName>
      </Content>

      <UserImg source={profileImg} />
    </Container>
  );
};

export default Header;
