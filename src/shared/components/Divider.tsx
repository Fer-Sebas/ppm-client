import React, { ReactElement } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { calcDimensions } from '../pixelPerfect';
import { DESIGN_TOKENS as $ } from '../designTokens';

interface DividerProps {
  style?: ViewStyle;
}

const styles = StyleSheet.create({
  divider: {
    backgroundColor: $.border.color,
    height: calcDimensions(1),
    width: '100%',
    marginBottom: calcDimensions($.divider.margin.bottom),
  },
});

const Divider: React.FC<DividerProps> = (props: DividerProps): ReactElement => {
  return <View style={[styles.divider, props.style]} />;
};

export default Divider;
