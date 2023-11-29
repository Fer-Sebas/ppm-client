import React from "react"
import { Text, StyleSheet, TextInput, View } from "react-native"
import { calcDimensions } from "../pixelPerfect"
import { DESIGN_TOKENS as $ } from "../designTokens"


const styles = StyleSheet.create({

    divider: {
        backgroundColor: $.border.color,
        height: calcDimensions(1),
        width: '100%',
        marginBottom: calcDimensions($.divider.margin.bottom)
    }

}) 

export function Divider (props) {

    return (
        <View style={styles.divider}/>
    )

}
