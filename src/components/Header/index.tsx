import React from 'react';

import { Container, Content, Greeting, UserName, UserImg } from './styles';

import profileImg from '../../assets/lucas.png';

const Header: React.FC = () => (
  <Container>
    <Content>
      <Greeting>Olá,</Greeting>
      <UserName>Lucas</UserName>
    </Content>

    <UserImg source={profileImg} />
  </Container>
);

export default Header;
