import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import { Container, Content, Title, SubTitle, List, ListCard } from './styles';

import Header from '../../components/Header';
import EnviromentButtom from '../../components/Enviroment';
import PlantCardPrimary from '../../components/PlantCardPrimary';
import Load from '../../components/Load';

import api from '../../services/api';

interface EnviromentProps {
  key: string;
  title: string;
}

interface PlantsProps {
  id: 1;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  };
}

const Dashboard: React.FC = () => {
  const [enviroments, setEnviroments] = useState<EnviromentProps[]>([]);
  const [plants, setPlants] = useState<PlantsProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantsProps[]>([]);
  const [enviromentsSelected, setEnviromentsSelected] = useState('all');
  const [loading, setLoading] = useState(true);

  const handleEnviromentSelected = (environment: string) => {
    setEnviromentsSelected(environment);

    if (environment === 'all') {
      return setFilteredPlants(plants);
    }

    const filtered = plants.filter(plant =>
      plant.environments.includes(environment),
    );

    setFilteredPlants(filtered);
  };

  useEffect(() => {
    async function fetchEnviroment() {
      const { data } = await api.get(
        'plants_environments?_sort=title&_order=asc',
      );
      setEnviroments([
        {
          key: 'all',
          title: 'Todos',
        },
        ...data,
      ]);
    }

    fetchEnviroment();
  }, []);

  useEffect(() => {
    async function fetchPlants() {
      const { data } = await api.get('plants?_sort=name&_order=asc');
      setPlants(data);
      setFilteredPlants(data);
      setLoading(false);
    }

    fetchPlants();
  }, []);

  if (loading) {
    return <Load />;
  }
  return (
    <Container>
      <Content>
        <Header />

        <Title>Em qual ambiente</Title>
        <SubTitle>você quer colocar sua planta?</SubTitle>
      </Content>

      <List>
        <FlatList
          data={enviroments}
          renderItem={({ item }) => (
            <EnviromentButtom
              title={item.title}
              active={item.key === enviromentsSelected}
              onPress={() => handleEnviromentSelected(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </List>

      <ListCard>
        <FlatList
          data={filteredPlants}
          renderItem={({ item }) => <PlantCardPrimary data={item} />}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </ListCard>
    </Container>
  );
};

export default Dashboard;
