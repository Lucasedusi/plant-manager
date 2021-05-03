import React from 'react';

import { Container, Content, Emoji, Title, SubTitle, Footer } from './styles';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/core';

const Confirmation: React.FC = () => {
  const navigation = useNavigation();

  const handleMoveOn = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <Container>
      <Content>
        <Emoji>😁</Emoji>
        <Title>Prontinho</Title>
        <SubTitle>
          Agora vamos começar a cuidar das suas{'\n'}plantinhas com muito
          cuidado.
        </SubTitle>
        <Footer>
          <Button title="Começar" onPress={handleMoveOn} />
        </Footer>
      </Content>
    </Container>
  );
};

export default Confirmation;
