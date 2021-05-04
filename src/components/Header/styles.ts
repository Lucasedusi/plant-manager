import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.View``;

export const Greeting = styled.Text`
  font-size: 32px;
  color: #52665a;
  font-family: 'Jost-Light';
`;

export const UserName = styled.Text`
  font-size: 32px;
  color: #52665a;
  font-family: 'Jost-SemiBold';
  line-height: 40px;
`;

export const UserImg = styled.Image`
  width: 66px;
  height: 66px;
  border-radius: 50px;
`;
