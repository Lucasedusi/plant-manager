import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

interface PlantsProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
}

const PlantCardSecondary: React.FC<PlantsProps> = ({ data, ...rest }) => (
  <RectButton style={styles.Container} {...rest}>
    <SvgFromUri uri={data.photo} width={50} height={50} />
    <Text style={styles.TitleCard}>{data.name}</Text>

    <View style={styles.details}>
      <Text style={styles.timeLabel}>Regar as</Text>
      <Text style={styles.time}>{data.hour}</Text>
    </View>
  </RectButton>
);

const styles = StyleSheet.create({
  Container: {
    maxWidth: '100%',
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    marginVertical: 5,
  },

  TitleCard: {
    flex: 1,
    marginLeft: 10,
    fontFamily: 'Jost-SemiBold',
    fontSize: 17,
    color: '#52665A',
  },

  details: {
    alignItems: 'flex-end',
  },

  timeLabel: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: 'Jost-Regular',
    color: '#aab2ad',
  },

  time: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: 'Jost-SemiBold',
    color: '#738078',
  },
});

export default PlantCardSecondary;
