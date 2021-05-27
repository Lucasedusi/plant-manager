import React from 'react';

import { StyleSheet, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

interface PlantsProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  };
}

const PlantCardPrimary: React.FC<PlantsProps> = ({ data, ...rest }) => (
  <RectButton style={styles.Container} {...rest}>
    <SvgFromUri uri={data.photo} width={70} height={70} />
    <Text style={styles.TextCard}>{data.name}</Text>
  </RectButton>
);

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    maxWidth: '100%',
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    margin: 10,
  },

  TextCard: {
    color: '#2B7A4B',
    fontFamily: 'Jost-SemiBold',
    marginVertical: 16,
  },
});

export default PlantCardPrimary;
