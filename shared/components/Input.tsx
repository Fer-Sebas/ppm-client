import React from "react"
import { Text, StyleSheet, TextInput } from "react-native"
import { calcDimensions } from "../pixelPerfect"
import { DESIGN_TOKENS as $ } from "../designTokens"

export function InputForText (props) {

    return (
        <>
            <Text style={styles.inputLabel}>
                {props.label}
            </Text>
            <TextInput 
                style={styles.inputBox}
                id={props.name}
                placeholder={props.placeholder}
                placeholderTextColor={'#FFFFFF50'}
                onChangeText={props.onChangeText}
            />
            <Text style={styles.helperText}>
                {props.helperText}
            </Text>
        </>
    )

}

const styles = StyleSheet.create({

    inputLabel: {
        color: $.text.label.color,
        fontSize: calcDimensions(16),
        fontFamily: $.text.label.font,
        marginBottom: calcDimensions(8)
    },
    helperText: {
        color: $.text.helper.color,
        fontSize: calcDimensions(14),
        fontFamily: $.text.helper.font
    },
    inputBox: {
        paddingHorizontal: calcDimensions($.input.standard.paddingHorizontal),
        paddingVertical: calcDimensions($.input.standard.paddingVertical),
        borderWidth: calcDimensions(1),
        borderRadius: calcDimensions($.input.standard.radius),
        borderColor: $.input.standard.border,
        backgroundColor: $.input.standard.background,
        color: $.input.standard.color,
        fontSize: calcDimensions(14),
        marginBottom: calcDimensions(32)
    },


}) 