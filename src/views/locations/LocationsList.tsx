import React, { FC } from 'react';
import { View } from 'react-native';
import { Card } from '../../shared/components/Cards';
import groupBy from '../../shared/groupBy';
import { SubHeading } from '../../shared/components/Typography';
import {
  dummyLocations as locationList,
  dummyZones as zoneList,
} from '../../../dummyDevUserData';
import LocationCard from './LocationCard';

interface LocationListProps {
  handleSelectedLocation: (location: any) => void;
}

const LocationList: FC<LocationListProps> = ({ handleSelectedLocation }) => {
  const locations = groupBy(locationList, 'zone' as any);
  const zones = zoneList;

  return (
    <>
      {locations ? (
        Object.keys(locations).map((key: any) => {
          return (
            <View key={key}>
              <SubHeading>{zones[key]}</SubHeading>

              {locations[key].map((location, index) => {
                return (
                  <LocationCard
                    key={index}
                    data={location as any}
                    onPress={() => handleSelectedLocation(location)}
                  />
                );
              })}
            </View>
          );
        })
      ) : (
        <Card
          muted={true}
          centered={true}
          title='No se pudieron cargar las ubicaciones'
        />
      )}
    </>
  );
};

export default LocationList;
