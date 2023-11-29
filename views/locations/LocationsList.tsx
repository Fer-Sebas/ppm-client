import React from "react"
import { View } from "react-native"
import { Card } from "../../shared/components/Cards"
import { LocationCard } from "./LocationCard"
import groupBy from "../../shared/groupBy"
import { SubHeading } from "../../shared/components/Typography"
import { dummyLocations as locationList, dummyZones as zoneList } from "../../dummyDevUserData"

export function LocationList ({ handleSelectedLocation }) {

    const locations = groupBy(locationList, 'zone')
    const zones = zoneList

    return (
        <>
        {
            locations.length >= 1 ? 

            Object.keys(locations).map((key) => {

                return (

                    <View key={key}>

                        <SubHeading>{zones[key]}</SubHeading>
                        
                        {
                        locations[key].map((location, index) => {

                            return (
                                <LocationCard key={index} data={location} onPress={() => handleSelectedLocation(location)} />
                            )

                        })
                        }

                    </View>

                )

            })

            :

            <Card
                muted={true}
                centered={true}
                title='No se pudieron cargar las ubicaciones'
            />

        }
        </>
    )

}
