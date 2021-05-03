import React from 'react';

import { Container, Content, Title, SubTitle } from './styles';
import Header from '../../components/Header';

const Dashboard: React.FC = () => (
  <Container>
    <Content>
      <Header />

      <Title>Em qual ambiente</Title>
      <SubTitle>você quer colocar sua planta?</SubTitle>
    </Content>
  </Container>
);

export default Dashboard;
