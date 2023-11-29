import React, { useState } from "react"
import { HeroHeader, Paragraph } from "../shared/components/Typography"
import { View } from "react-native"
import { InputForText } from "../shared/components/Input"
import Button from "../shared/components/Button"

export default function SignUpView (props) {

    const [ emailFieldHelperText, setEmailFieldHelperText ] = useState('')
    const [ usernameFieldHelperText, setUsernameFieldHelperText ] = useState('')
    const [ phoneFieldHelperText, setPhoneFieldHelperText ] = useState('')

    return (
        <View>
            <HeroHeader>Welcome aboard!</HeroHeader>
            <Paragraph>Tell us a bit about yourself and start stacking your the things you wish to accomplish. </Paragraph>
            <InputForText 
                label="Email"
                name="userEmail"
                placeholder="Enter your email address"
                helperText={emailFieldHelperText}
            />
            <InputForText
                label="Full Name"
                name="userName"
                placeholder="Enter your full name"
                helperText={usernameFieldHelperText}
            />
            <InputForText
                label="Phone Number"
                name="userPhone"
                placeholder="Enter your phone number"
                helperText={phoneFieldHelperText}
            />
            <Button
                label="Sign Up"
                variant="main"
                onPress={() => {props.handleSetView('login')}}
            />
        </View>
    )

}