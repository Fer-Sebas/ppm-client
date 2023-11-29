import React from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"
import { calcDimensions } from "../../shared/pixelPerfect"
import { Card } from "../../shared/components/Cards"
import { BoldSmallCopy, SmallCopy } from "../../shared/components/Typography"
import { Feather } from '@expo/vector-icons'

const styles = StyleSheet.create ({

    turnCard: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: calcDimensions(150),
    },
    turnCardMenu: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    turnCardHighlight: {
        color: '#0C66E4',
    },
})

export function TurnCard (props) {

    return (

        <Card >
            <View style={styles.turnCard}>
            <View>
                <BoldSmallCopy>{props.siteName}</BoldSmallCopy>
                <SmallCopy><Text style={styles.turnCardHighlight}>{props.weekDay}</Text> | {props.turnTime}</SmallCopy>
            </View>
            <View style={styles.turnCardMenu}>
                <Pressable>
                    <Feather name='more-vertical' size={calcDimensions(20)} />
                </Pressable>
            </View>
            </View>
        </Card>

    )

}