import React, { ReactElement } from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { calcDimensions } from '../pixelPerfect';
import { DESIGN_TOKENS as $ } from '../designTokens';
import { BoldSmallCopy, SmallCopy } from './Typography';

interface CardProps {
  muted?: boolean;
  centered?: boolean;
  style?: ViewStyle;
  children?: any;
  title?: string;
}

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: calcDimensions($.card.paddingHorizontal),
    paddingVertical: calcDimensions($.card.paddingVertical),
    backgroundColor: $.card.background.regular,
    borderColor: $.card.border,
    borderWidth: calcDimensions(1),
    borderRadius: $.card.radius,
    marginBottom: calcDimensions($.card.marginBottom),
  },
  muted: {
    backgroundColor: $.card.background.muted,
    color: $.card.text.color.muted,
  },
  centered: {
    textAlign: 'center',
  },
});

export const Card: React.FC<CardProps> = (
  props: React.PropsWithChildren<CardProps>
): ReactElement => {
  return (
    <View style={[styles.base, props.muted ? styles.muted : {}, props.style]}>
      <Text
        style={[
          props.muted ? styles.muted : {},
          props.centered ? styles.centered : {},
        ]}
      >
        {props.children}
      </Text>
    </View>
  );
};

interface EmptyStateCardProps {
  title: string;
  body?: string;
}

export const EmptyStateCard: React.FC<EmptyStateCardProps> = (
  props: EmptyStateCardProps
): ReactElement => {
  return (
    <Card muted>
      <BoldSmallCopy>{props.title}</BoldSmallCopy>
      {'\n'}
      {props.body ? <SmallCopy>{props.body}</SmallCopy> : null}
    </Card>
  );
};
