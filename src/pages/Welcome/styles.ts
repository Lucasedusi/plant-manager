import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
`;

export const Title = styled.Text`
  margin-top: 15px;
  font-size: 28px;
  text-align: center;
  color: #52665a;
  font-family: 'Jost-Bold';
  line-height: 38px;
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: 20px;
  color: #52665a;
  font-weight: 800;
  line-height: 32px;
  font-family: 'Jost-Regular';
`;

export const Button = styled.TouchableOpacity`
  background-color: #32b768;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 20px;
  height: 56px;
  width: 80px;
`;

export const TextButton = styled.Text`
  color: #fff;
`;
