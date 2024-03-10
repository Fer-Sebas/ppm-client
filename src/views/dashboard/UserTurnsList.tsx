import React from 'react';
import { View } from 'react-native';
import { SubHeading } from '../../shared/components/Typography';
import { EmptyStateCard } from '../../shared/components/Cards';
import { TurnCard } from './TurnCard';

export function UserTurnsList(props: any) {
  const turns: any = props.userTurns;

  return (
    <View>
      <SubHeading>Tus turnos ({turns.length}/3)</SubHeading>
      {turns.length >= 1 ? (
        turns.map((turn: any, index: any) => (
          <TurnCard
            key={index}
            siteName={turn.locationName}
            weekDay={turn.weekday}
            turnTime={turn.turnTime}
          />
        ))
      ) : (
        <EmptyStateCard title='Aun no tienes turnos' />
      )}
    </View>
  );
}
