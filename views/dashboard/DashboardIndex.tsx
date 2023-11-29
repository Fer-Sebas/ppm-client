import React from "react"
import { View, Text } from "react-native"
import { dummyUser as USER_DATA } from "../../dummyDevUserData"
import { dummyNewsAPI as NEWS_API } from "../../dummyDevUserData"
import { GreetingHeader } from "./GreetingHeader"
import { NewsCarousel } from "./NewsCarousel"
import { UserTurnsList } from "./UserTurnsList"
import { UserRequestList } from "./UserRequestsList"

export default function DashboardView () {

    return (
        <View>
            <GreetingHeader>{USER_DATA.name}</GreetingHeader>

            <NewsCarousel data={NEWS_API}/>

            <UserTurnsList userTurns={USER_DATA.turns} />

            <UserRequestList userRequests={USER_DATA.requests} />

        </View>
    )

}