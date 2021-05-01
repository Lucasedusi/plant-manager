import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 30px;
`;

export const Emoji = styled.Text`
  font-size: 78px;
`;

export const Title = styled.Text`
  font-size: 22px;
  text-align: center;
  color: #52665a;
  line-height: 30px;
  margin-top: 15px;
  font-weight: bold;
`;
export const SubTitle = styled.Text`
  font-size: 17px;
  text-align: center;
  line-height: 25px;
  padding: 15px 0;
  color: #52665a;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 0 50px;
  margin-top: 20px;
`;
