import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {
  Heading,
  HeroHeader,
  Paragraph,
  SubHeading,
} from '../../shared/components/Typography';

import { dummyLocations as locations } from '../../../dummyDevUserData';

import { calcDimensions } from '../../shared/pixelPerfect';
import { DESIGN_TOKENS as $ } from '../../shared/designTokens';
import { dummyUsers } from '../../../dummyDevUserData';

interface LocationDetailProps {
  selectedLocation: any;
  onBackPress: () => void;
}

const LocationDetail: FC<LocationDetailProps> = ({
  selectedLocation,
  onBackPress,
}) => {
  const data: any = locations[selectedLocation.locationID];

  return (
    <View>
      <TouchableOpacity onPress={onBackPress}>
        <Feather
          name='arrow-left'
          size={calcDimensions(24)}
          color={$['bottom-nav'].tab.icon.color.idle}
        />
      </TouchableOpacity>

      <Text
        style={{
          textTransform: 'capitalize',
          marginVertical: calcDimensions(24),
        }}
      >
        <HeroHeader>{data.locationName}</HeroHeader>
      </Text>
      <Heading>Informacion de contacto</Heading>

      <SubHeading>Encargado</SubHeading>
      <Text
        style={{
          textTransform: 'capitalize',
          marginBottom: calcDimensions(16),
        }}
      >
        <Paragraph>
          {dummyUsers[data.locationManager].userName} |{' '}
          {dummyUsers[data.locationManager].userPhone}
        </Paragraph>
      </Text>

      <SubHeading>Direccion del sitio</SubHeading>
      <Text
        style={{
          textTransform: 'capitalize',
          marginBottom: calcDimensions(16),
        }}
      >
        <Paragraph>{data.locationAddress}</Paragraph>
      </Text>

      <SubHeading>Dirección de recogida</SubHeading>
      <Text
        style={{
          textTransform: 'capitalize',
          marginBottom: calcDimensions(16),
        }}
      >
        <Paragraph>{data.trolleyPickupAddress}</Paragraph>
      </Text>

      <Heading>Turnos disponibles</Heading>
      <Paragraph>Haz click sobre un turno para solicitarlo.</Paragraph>
    </View>
  );
};

export default LocationDetail;
