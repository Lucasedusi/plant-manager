/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';

import {
  Container,
  SpotlightImage,
  SpotlightText,
  Image,
  Plants,
  PlantTitle,
} from './styles';

import waterdrop from '../../assets/waterdrop.png';
import Header from '../../components/Header';
import { FlatList } from 'react-native';
import { loadPlant, PlantProps } from '../../libs/storage';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';

const MyPlants: React.FC = () => {
  const [myPlants, setMyplants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [wateredNext, setWateredNext] = useState<string>();

  useEffect(() => {
    async function loadStorageDate() {
      const plantsStoraged = await loadPlant();

      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt },
      );

      setWateredNext(
        `Não esqueça de reguar a ${plantsStoraged[0].name} às ${nextTime} horas.`,
      );

      setMyplants(plantsStoraged);
      setLoading(false);
    }

    loadStorageDate();
  }, []);

  return (
    <Container>
      <Header />

      <SpotlightImage>
        <Image source={waterdrop} />
        <SpotlightText>{wateredNext}</SpotlightText>
      </SpotlightImage>

      <Plants>
        <PlantTitle>Próximas Regadas</PlantTitle>

        <FlatList
          data={myPlants}
          keyExtractor={item => String(item.id)}
          renderItem={item => <SpotlightText>ele</SpotlightText>}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1 }}
        />
      </Plants>
    </Container>
  );
};

export default MyPlants;
