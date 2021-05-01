import React from 'react';

import { ButtonName, TextButton } from './styles';

const Button: React.FC = () => {
  return (
    <ButtonName activeOpacity={0.8}>
      <TextButton>Confirmar</TextButton>
    </ButtonName>
  );
};

export default Button;
