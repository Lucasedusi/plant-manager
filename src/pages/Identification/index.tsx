/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  Container,
  KeyboardUse,
  Content,
  Form,
  Emoji,
  TextInput,
  Title,
  Footer,
} from './styles';
import { Alert } from 'react-native';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../components/Button';

const Identification: React.FC = () => {
  const [isFocused, setIsfocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  const navigation = useNavigation();

  const handleInputBlur = () => {
    setIsfocused(false);
    setIsFilled(!!name);
  };

  const handleInputFocus = () => {
    setIsfocused(true);
  };

  const handleInputChange = (value: string) => {
    setIsFilled(!!value);
    setName(value);
  };

  const handleSubmit = async () => {
    if (!name) return Alert.alert('Me diga seu nome 😥');

    try {
      await AsyncStorage.setItem('@plantmanager:user', name);
      navigation.navigate('Confirmation');
    } catch {
      Alert.alert('Não foi possível salvar o seu nome 😥');
    }
  };

  return (
    <Container>
      <KeyboardUse>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                <Button title="Confirmar" onPress={handleSubmit} />
              </Footer>
            </Form>
          </Content>
        </TouchableWithoutFeedback>
      </KeyboardUse>
    </Container>
  );
};

export default Identification;
