import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
`;

export const KeyboardUse = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.Text`
  color: #52665a;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  text-align: center;
  margin-top: 20px;
`;

export const Form = styled.View`
  flex: 1;
  padding: 0 54px;
  align-items: center;
  justify-content: center;
`;

export const Emoji = styled.Text`
  font-size: 44px;
`;

export const TextInput = styled.TextInput`
  width: 100%;
  padding: 10px;
  font-size: 18px;
  margin-top: 50px;
  text-align: center;
  border-color: #cfcfcf;
  border-bottom-width: 1px;
`;

export const Footer = styled.View`
  width: 100%;
  margin-top: 40px;
  padding: 0 20px;
`;
