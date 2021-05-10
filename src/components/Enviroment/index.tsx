/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

interface EnviromentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

const EnviromentButtom: React.FC<EnviromentButtonProps> = ({
  title,
  active = false,
  ...rest
}) => (
  <RectButton
    style={[styles.Container, active && styles.ContainerActive]}
    {...rest}>
    <Text style={[styles.TextButton, active && styles.TextActive]}>
      {title}
    </Text>
  </RectButton>
);

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#F0F0F0',
    width: 76,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginRight: 5,
  },

  ContainerActive: {
    backgroundColor: '#DAF2E4',
  },

  TextButton: {
    color: '#52665A',
    fontFamily: 'Jost-Regular',
  },

  TextActive: {
    fontFamily: 'Jost-SemiBold',
    color: '#2B7A4B',
  },
});

export default EnviromentButtom;
