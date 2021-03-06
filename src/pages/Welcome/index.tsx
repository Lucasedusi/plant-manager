import React from 'react';
import { Image } from 'react-native';

import { Container, Wrapper, Title, SubTitle, Button } from './styles';
import Icon from 'react-native-vector-icons/Feather';

import wateringImg from '../../assets/watering.png';
import { useNavigation } from '@react-navigation/core';

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  const handleStart = () => {
    navigation.navigate('Identification');
  };

  return (
    <Container>
      <Wrapper>
        <Title>
          Gerencie{'\n'}suas plantas de{'\n'}forma fácil
        </Title>

        <Image source={wateringImg} />

        <SubTitle>
          Não esqueça mais de reguar suas{'\n'}plantas. Nós cuidamos de lembrar
          você
          {'\n'}
          sempre que precisar.
        </SubTitle>

        <Button onPress={handleStart} activeOpacity={0.8}>
          <Icon name="chevron-right" size={26} color="#fff" />
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Welcome;
