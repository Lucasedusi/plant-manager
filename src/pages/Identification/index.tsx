/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  Container,
  Keyboard,
  Content,
  Form,
  Emoji,
  TextInput,
  Title,
  Footer,
} from './styles';

import Button from '../../components/Button';

const Identification: React.FC = () => {
  const [isFocused, setIsfocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  function handleInputBlur() {
    setIsfocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsfocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  return (
    <Container>
      <Keyboard>
        <Content>
          <Form>
            <Emoji>{isFilled ? '😀' : '🙂'}</Emoji>

            <Title>Como podemos{'\n'}chamar você</Title>

            <TextInput
              style={(isFocused || isFilled) && { borderColor: '#32B768' }}
              placeholder="Digite um nome"
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={handleInputChange}
            />

            <Footer>
              <Button />
            </Footer>
          </Form>
        </Content>
      </Keyboard>
    </Container>
  );
};

export default Identification;
