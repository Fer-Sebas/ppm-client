import React, { useState } from 'react';
import { View } from 'react-native';
import { HeroHeader, Paragraph } from '../../shared/components/Typography';

import { calcDimensions } from '../../shared/pixelPerfect';
import LocationDetail from './LocationDetail';
import LocationList from './LocationsList';

export default function LocationsView(props: any) {
  const [selectedLocation, setSelectedLocation] = useState(null);

  function handleSelectedLocation(location: any) {
    setSelectedLocation(location);
  }

  if (selectedLocation) {
    return (
      <LocationDetail
        selectedLocation={selectedLocation}
        onBackPress={() => setSelectedLocation(null)}
      />
    );
  }

  return (
    <View style={{ paddingBottom: calcDimensions(104) }}>
      <HeroHeader>Ubicaciones</HeroHeader>

      <Paragraph>
        Para conocer los horarios disponibles haz click sobre un una ubicacion.
      </Paragraph>

      <LocationList handleSelectedLocation={handleSelectedLocation} />
    </View>
  );
}
