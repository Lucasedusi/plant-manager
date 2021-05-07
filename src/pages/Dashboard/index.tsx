/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';

import { Container, Content, Title, SubTitle, List, ListCard } from './styles';

import Header from '../../components/Header';
import EnviromentButtom from '../../components/Enviroment';
import PlantCardPrimary from '../../components/PlantCardPrimary';
import Load from '../../components/Load';

import api from '../../services/api';
import { useNavigation } from '@react-navigation/core';

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

  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const navigation = useNavigation();

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

  async function fetchPlants() {
    const { data } = await api.get(
      `plants?_sort=name&_order=asc&_page=${page}&_limit=8`,
    );

    if (!data) {
      return setLoading(true);
    }

    if (page > 1) {
      setPlants(oldValue => [...oldValue, ...data]);
      setFilteredPlants(oldValue => [...oldValue, ...data]);
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }

    setLoading(false);
    setLoadingMore(false);
  }

  const handleFetchMore = (distance: number) => {
    if (distance < 1) {
      return;
    }

    setLoadingMore(true);
    setPage(oldValue => oldValue + 1);
    fetchPlants();
  };

  const handlePlantSelect = (plant: PlantsProps) => {
    navigation.navigate('PlantSave', { plant });
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
          keyExtractor={item => String(item.key)}
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
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardPrimary
              data={item}
              onPress={() => handlePlantSelect(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) =>
            handleFetchMore(distanceFromEnd)
          }
          ListFooterComponent={
            loadingMore ? <ActivityIndicator color={'#32B768'} /> : <></>
          }
        />
      </ListCard>
    </Container>
  );
};

export default Dashboard;
