import React, { ReactElement } from 'react';
import {
  Text,
  StyleSheet,
  Pressable,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { DESIGN_TOKENS as $ } from '../designTokens';
import { calcDimensions } from '../pixelPerfect';

interface FloatingActionButtonProps {
  label: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = (
  props: FloatingActionButtonProps
): ReactElement => {
  return (
    <Pressable style={[props.style, styles.button]} onPress={props.onPress}>
      <Text style={styles.text}>{props.label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: calcDimensions(20),
    fontFamily: $.button.font,
    color: $.button.main.text.color.default,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: calcDimensions($.button.fab.padding),
    borderRadius: calcDimensions($.button.fab.radius),
    backgroundColor: $.button.default.background.normal,
  },
});

export default FloatingActionButton;
