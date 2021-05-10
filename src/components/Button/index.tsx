import React from 'react';

import { TouchableOpacityProps } from 'react-native';
import { ButtonName, TextButton } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title, ...rest }) => {
  return (
    <ButtonName activeOpacity={0.8} {...rest}>
      <TextButton>{title}</TextButton>
    </ButtonName>
  );
};

export default Button;
