import React from 'react';

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
} from './styles';
import { SvgFromUri } from 'react-native-svg';
import Button from '../../components/Button';
import waterdrop from '../../assets/waterdrop.png';

const PlantSave: React.FC = () => {
  return (
    <Container>
      <PlantInfo>
        <SvgFromUri uri="" width={150} height={150} />

        <PlantName>Nome da Prantinha</PlantName>
        <PlantAbout>
          Não pode pegar sol e deve ficar em temperatura ambiente, dentro de
          casa.
        </PlantAbout>
      </PlantInfo>

      <PlantController>
        <TipContainer>
          <TipImage source={waterdrop} />
          <TipText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aut
          </TipText>
        </TipContainer>

        <AlertLabel>Ecolha o melhor horário para ser lembrado:</AlertLabel>

        <Button title="Cadastrar Planta" onPress={() => {}} />
      </PlantController>
    </Container>
  );
};

export default PlantSave;
