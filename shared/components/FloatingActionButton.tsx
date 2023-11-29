import React from 'react'
import { Text, StyleSheet, Pressable } from 'react-native'
import { DESIGN_TOKENS as $ } from '../designTokens'
import { calcDimensions } from '../pixelPerfect'

export default function FloatingActionButton (props) {

  return (
    <Pressable style={[props.style, styles.button, styles.button[props.variant]]} onPress={props.onPress}>
      <Text style={styles.text}>{props.label}</Text>
    </Pressable>
  ) 

}

const styles = StyleSheet.create({

    text: {
        fontSize: calcDimensions(20),
        fontFamily: $.button.font,
        color: $.button.main.text.color.default
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: calcDimensions($.button.fab.padding),
        borderRadius: calcDimensions($.button.fab.radius),
        backgroundColor: $.button.default.background.normal,
        main: {
          backgroundColor: $.button.main.background.normal,
        }
    }

})
