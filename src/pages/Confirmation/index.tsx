/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import { Container, Content, Emoji, Title, SubTitle, Footer } from './styles';
import Button from '../../components/Button';
import { useNavigation, useRoute } from '@react-navigation/core';

interface Params {
  title: string;
  subTitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug';
  nextScreen: string;
}

const emogis = {
  smile: '😀',
  hug: '🤗',
};

const Confirmation: React.FC = () => {
  const navigation = useNavigation();
  const routes = useRoute();

  const {
    title,
    subTitle,
    buttonTitle,
    icon,
    nextScreen,
  } = routes.params as Params;

  const handleMoveOn = () => {
    navigation.navigate(nextScreen);
  };

  return (
    <Container>
      <Content>
        <Emoji>{emogis[icon]}</Emoji>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <Footer>
          <Button title="Começar" onPress={handleMoveOn} />
        </Footer>
      </Content>
    </Container>
  );
};

export default Confirmation;
