import React, { ReactElement, ReactNode } from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { DESIGN_TOKENS as $ } from '../designTokens';
import { calcDimensions } from '../pixelPerfect';

interface ButtonProps {
  label: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps): ReactElement => {
  return (
    <Pressable style={[styles.button]} onPress={props.onPress}>
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
    paddingHorizontal: calcDimensions($.button.standard.paddingHorizontal),
    paddingVertical: calcDimensions($.button.standard.paddingVertical),
    borderRadius: calcDimensions($.button.standard.radius),
    backgroundColor: $.button.default.background.normal,
  },
});

export default Button;
