import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { calcDimensions } from '../../shared/pixelPerfect';
import { useEffect, useState } from 'react';
import { DESIGN_TOKENS as $ } from '../../shared/designTokens';

const styles = StyleSheet.create({
  general: {
    color: $.text.greeting.color.general,
    fontSize: calcDimensions(20),
    fontFamily: $.text.greeting.font,
    marginBottom: calcDimensions(16),
  },

  highlght: {
    color: $.text.greeting.color.highlight,
  },
});

export function GreetingHeader(props: any) {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting('Buenos días,');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Buenas tardes,');
    } else {
      setGreeting('Buenas noches,');
    }
  }, []);

  return (
    <>
      <Text style={styles.general}>
        {greeting + '\n'}
        <Text style={styles.highlght}>{props.children}.</Text>
      </Text>
    </>
  );
}
