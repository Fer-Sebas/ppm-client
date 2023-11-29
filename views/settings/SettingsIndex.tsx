import React from "react"
import { View, Text } from "react-native"
import { HeroHeader, Paragraph, SubHeading } from "../../shared/components/Typography"
import { dummyLocations as locationList, dummyZones as zoneList } from "../../dummyDevUserData"

export default function SettingsView (props) {

    return (
        <View>
            <HeroHeader>Ajustes</HeroHeader>
            <Paragraph>
                Los ajustes apareceran aqui!!!.
            </Paragraph>

        </View>
    )

}