import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #f0f0f0;
`;

export const PlantInfo = styled.View`
  flex: 1;
  padding: 30px 50px;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
`;

export const PlantName = styled.Text`
  font-family: 'Jost-SemiBold';
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #52665a;
  margin-top: 15px;
  text-align: center;
`;

export const PlantAbout = styled.Text`
  font-family: 'Jost-Regular';
  font-size: 17px;
  text-align: center;
  line-height: 25px;
  text-align: center;
  color: #5c6660;
  margin-top: 10px;
`;

export const PlantController = styled.View`
  background-color: #fff;
  padding: 0;
  padding-bottom: 20px;
`;

export const TipContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ebf6ff;
  padding: 20px;
`;

export const TipImage = styled.Image`
  width: 56px;
  height: 56px;
`;

export const TipText = styled.Text`
  flex: 1;
  margin-left: 20px;
  font-family: 'Jost-Regular';
  font-size: 15px;
  line-height: 23px;
  text-align: justify;
  color: #3d7199;
`;

export const AlertLabel = styled.Text`
  font-family: 'Jost-Regular';
  font-size: 13px;
  line-height: 23px;
  text-align: center;
  color: #5c6660;
`;
