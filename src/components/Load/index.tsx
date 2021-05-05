import React from 'react';
import { StyleSheet } from 'react-native';

import { Container } from './styles';

import LottieView from 'lottie-react-native';
import loadAnimation from '../../assets/load.json';

const Load: React.FC = () => (
  <Container>
    <LottieView source={loadAnimation} autoPlay loop style={styles.Animation} />
  </Container>
);

const styles = StyleSheet.create({
  Animation: {
    backgroundColor: 'transparent',
    width: 200,
    height: 200,
  },
});

export default Load;
