import React, { useState } from "react"
import { HeroHeader, Paragraph } from "../shared/components/Typography"
import { View } from "react-native"
import { InputForText } from "../shared/components/Input"
import Button from "../shared/components/Button"
import axios from "axios"

export default function LoginView (props) {

    const [ emailFieldHelperText, setEmailFieldHelperText ] = useState('')

    const [ userEmail, bindUserEmail ] = useState('')
    const [ submission, setSubmission ] = useState(false)

    function handleSubmit () {

        axios
            .post('http://localhost:1914/v1/auth', {userEmail})
            .then(
                (response) => setSubmission(response.data)
            )
            .catch(
                (error) => {
                    setEmailFieldHelperText(error.response.data)
                }
                
            )

    }

    return (
        <View>
            <HeroHeader>Welcome back!</HeroHeader>
            <Paragraph>Enter your email address to sign in.</Paragraph>
            <InputForText 
                label="Email"
                name="userEmail"
                placeholder="Enter your email address"
                helperText={emailFieldHelperText}
                onChangeText={text => bindUserEmail(text)}
            />
            <Button
                label="Sign In"
                variant="main"
                onPress={() => {handleSubmit()}}
            />
            <Paragraph>{ submission ? submission : 'Submission not sent' }</Paragraph>
            
        </View>
    )

}