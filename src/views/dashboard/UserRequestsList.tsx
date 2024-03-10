import React from 'react';
import { View, Text } from 'react-native';
import {
  BoldSmallCopy,
  SmallCopy,
  SubHeading,
} from '../../shared/components/Typography';
import { Card } from '../../shared/components/Cards';

export function UserRequestList(props: any) {
  const requests = props.userRequests;

  return (
    <View>
      <SubHeading>Tus solicitudes</SubHeading>
      {requests.length >= 1 ? (
        ''
      ) : (
        <Card muted={true} centered={true}>
          <BoldSmallCopy>
            No tienes solicitudes pendientes por aprobar
          </BoldSmallCopy>
          {'\n'}
          <SmallCopy>Puedes solicitar otro turno haciendo click aqui</SmallCopy>
        </Card>
      )}
    </View>
  );
}
