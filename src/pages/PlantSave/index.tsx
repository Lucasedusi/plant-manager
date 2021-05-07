import React, { useState } from 'react';
import { Alert, Platform } from 'react-native';

import {
  Container,
  PlantName,
  PlantAbout,
  PlantController,
  TipContainer,
  TipImage,
  TipText,
  AlertLabel,
  PlantInfo,
  TimeText,
  TimeButton,
} from './styles';

import { useRoute } from '@react-navigation/core';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { format, isBefore } from 'date-fns';

import { SvgFromUri } from 'react-native-svg';
import Button from '../../components/Button';
import waterdrop from '../../assets/waterdrop.png';

interface Params {
  plant: {
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
  };
}

const PlantSave: React.FC = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

  const route = useRoute();
  const { plant } = route.params as Params;

  const handleChangeTime = (event: Event, dateTime: Date | undefined) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(oldState => !oldState);
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());
      return Alert.alert('Escolha uma hora no futuro! ⏰');
    }

    if (dateTime) {
      setSelectedDateTime(dateTime);
    }
  };

  const handleDatePickerForAndroid = () => {
    setShowDatePicker(oldState => !oldState);
  };

  return (
    <Container>
      <PlantInfo>
        <SvgFromUri uri={plant.photo} width={156} height={156} />

        <PlantName>{plant.name}</PlantName>
        <PlantAbout>{plant.about}</PlantAbout>
      </PlantInfo>

      <PlantController>
        <TipContainer>
          <TipImage source={waterdrop} />
          <TipText>{plant.water_tips}</TipText>
        </TipContainer>

        <AlertLabel>Ecolha o melhor horário para ser lembrado:</AlertLabel>

        {showDatePicker && (
          <DateTimePicker
            value={selectedDateTime}
            mode="time"
            display="spinner"
            onChange={handleChangeTime}
          />
        )}

        {Platform.OS === 'android' && (
          <TimeButton onPress={handleDatePickerForAndroid}>
            <TimeText>{`Alterar para: ${format(
              selectedDateTime,
              'HH:mm',
            )}`}</TimeText>
          </TimeButton>
        )}

        <Button title="Cadastrar Planta" onPress={() => {}} />
      </PlantController>
    </Container>
  );
};

export default PlantSave;
