import React from "react"
import { StyleSheet, TouchableOpacity, View, Text } from "react-native"
import { Feather } from '@expo/vector-icons'
import { Heading, HeroHeader, Paragraph, SubHeading } from "../../shared/components/Typography"

import { dummyLocations as locations } from "../../dummyDevUserData"
import { dummyUsers } from "../../dummyDevUserData"
import { calcDimensions } from "../../shared/pixelPerfect"
import { DESIGN_TOKENS as $ } from "../../shared/designTokens"

const styles = StyleSheet.create({

})

export function LocationDetail ({ selectedLocation, onBackPress }) {

    const data = locations[selectedLocation.locationID]

    return (
        <View>

            <TouchableOpacity onPress={onBackPress}>
                <Feather name='arrow-left' size={calcDimensions(24)} color={$['bottom-nav'].tab.icon.color.idle } />
            </TouchableOpacity>

            <Text style={{ textTransform: 'capitalize', marginVertical: calcDimensions(24) }}><HeroHeader>{data.locationName}</HeroHeader></Text>
            <Heading>Informacion de contacto</Heading>

            <SubHeading>Encargado</SubHeading>
            <Text style={{ textTransform: 'capitalize', marginBottom: calcDimensions(16) }}>
                <Paragraph>{dummyUsers[data.locationManager].userName} | {dummyUsers[data.locationManager].userPhone}</Paragraph>
            </Text>

            <SubHeading>Direccion del sitio</SubHeading>
            <Text style={{ textTransform: 'capitalize', marginBottom: calcDimensions(16) }}>
                <Paragraph>{data.locationAddress}</Paragraph>
            </Text>

            <SubHeading>DIreccion de recogida</SubHeading>
            <Text style={{ textTransform: 'capitalize', marginBottom: calcDimensions(16) }}>
                <Paragraph>{data.trolleyPickupAddress}</Paragraph>
            </Text>

            <Heading>Turnos disponibles</Heading>
            <Paragraph>Haz click sobre un turno para solicitarlo.</Paragraph>

        </View>
    )

}