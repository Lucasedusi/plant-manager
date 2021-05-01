import React from 'react';

import { Container, Content, Emoji, Title, SubTitle, Footer } from './styles';
import Button from '../../components/Button';

const Confirmation: React.FC = () => {
  return (
    <Container>
      <Content>
        <Emoji>😁</Emoji>
        <Title>Prontinho</Title>
        <SubTitle>
          Agora vamos começar a cuidar das suas{'\n'}plantinhas com muito
          cuidado.
        </SubTitle>
        <Footer>
          <Button />
        </Footer>
      </Content>
    </Container>
  );
};

export default Confirmation;
