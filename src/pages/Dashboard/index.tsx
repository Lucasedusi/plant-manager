import React from 'react';
import { View } from 'react-native';

import { Container, Content, Title, SubTitle, List } from './styles';
import Header from '../../components/Header';
import EnviromentButtom from '../../components/Enviroment';

const Dashboard: React.FC = () => (
  <Container>
    <Content>
      <Header />

      <Title>Em qual ambiente</Title>
      <SubTitle>você quer colocar sua planta?</SubTitle>
    </Content>

    <View>
      <List
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={() => <EnviromentButtom title="Cozinha" active />}
        horizontal
        showsHorizontalScrollIndicator={false}
        // contentContainerStyle={styles.enviromentList}
      />
    </View>
  </Container>
);

export default Dashboard;
