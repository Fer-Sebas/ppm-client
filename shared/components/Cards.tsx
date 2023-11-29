import React from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"
import { calcDimensions } from "../pixelPerfect"
import { DESIGN_TOKENS as $ } from "../designTokens"
import { BoldSmallCopy, SmallCopy } from "./Typography"

const styles = StyleSheet.create({

    base: {
        paddingHorizontal: calcDimensions($.card.paddingHorizontal),
        paddingVertical: calcDimensions($.card.paddingVertical),
        backgroundColor: $.card.background.regular,
        borderColor: $.card.border,
        borderWidth: calcDimensions(1),
        borderRadius: $.card.radius,
        marginBottom: calcDimensions($.card.marginBottom)
    },
    muted: {
        backgroundColor: $.card.background.muted,
        color: $.card.text.color.muted
    },
    centered: {
        textAlign: 'center'
    }

}) 

export function Card (props) {

    return (

        <View 
            style={[
                styles.base,
                props.muted === true ? styles.muted : {}, 
            ]}>
            <Text style={[ 
                props.muted === true ? styles.muted : {},
                props.centered === true ? styles.centered : {} 
            ]}>
                {props.children}
            </Text>
        </View>

    )

}


export function EmptyStateCard (props) {

    return (

        <Card styles={styles.muted}>
            <BoldSmallCopy styles={{textAling: 'center'}}>{props.title}</BoldSmallCopy>{'\n' }
            {
                props.body ? ( <SmallCopy>{props.body}</SmallCopy> ): null
            }
        </Card>

    )

}