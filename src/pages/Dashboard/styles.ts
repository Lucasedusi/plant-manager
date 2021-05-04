import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Content = styled.View`
  padding: 10px 30px;
`;

export const List = styled.FlatList`
  height: 48px;
  padding-bottom: 5px;
  margin: 20px 0 0 32px;
`;

export const Title = styled.Text`
  font-size: 17px;
  color: #52665a;
  font-family: 'Jost-Medium';
  line-height: 20px;
  margin-top: 15px;
`;

export const SubTitle = styled.Text`
  font-size: 17px;
  color: #52665a;
  font-family: 'Jost-Regular';
  line-height: 20px;
`;
