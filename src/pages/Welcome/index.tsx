import React from 'react';
import { Image } from 'react-native';

import { Container, Wrapper, Title, SubTitle, Button } from './styles';
import Icon from 'react-native-vector-icons/Feather';

import wateringImg from '../../assets/watering.png';

const Welcome: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          Gerencie{'\n'}suas plantas de{'\n'}forma fácil
        </Title>

        <Image source={wateringImg} />

        <SubTitle>
          Não esqueça mais de reguar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </SubTitle>

        <Button activeOpacity={0.8}>
          <Icon name="chevron-right" size={26} color="#fff" />
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Welcome;
