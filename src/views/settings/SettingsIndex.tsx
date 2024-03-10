import React from 'react';
import { View } from 'react-native';
import { HeroHeader, Paragraph } from '../../shared/components/Typography';

export default function SettingsView(props: any) {
  return (
    <View>
      <HeroHeader>Ajustes</HeroHeader>
      <Paragraph>Los ajustes apareceran aqui!!!.</Paragraph>
    </View>
  );
}
