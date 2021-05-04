import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ContainerProps {
  active: boolean;
}

export const Container = styled(RectButton)<ContainerProps>`
  background-color: #f0f0f0;
  width: 76px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;

  ${props =>
    props.active &&
    css`
      background-color: #daf2e4;
    `}
`;

export const ContainerActive = styled(RectButton)`
  background-color: #daf2e4;
`;

export const TextButton = styled.Text`
  color: #52665a;
  font-family: 'Jost-Regular';
`;

export const textActive = styled.Text`
  font-family: 'Jost-SemiBold';
  color: #32b768;
`;
