import React, { useState } from 'react';
import { HeroHeader, Paragraph } from '../shared/components/Typography';
import { View } from 'react-native';

import Button from '../shared/components/Button';
import InputForText from '../shared/components/Input';

export default function LoginView() {
  const [emailFieldHelperText, setEmailFieldHelperText] = useState('');

  const [userEmail, bindUserEmail] = useState('');
  const [submission, setSubmission] = useState(false);

  return (
    <View>
      <HeroHeader>Welcome back!</HeroHeader>
      <Paragraph>Enter your email address to sign in.</Paragraph>
      <InputForText
        label='Email'
        name='userEmail'
        placeholder='Enter your email address'
        helperText={emailFieldHelperText}
        onChangeText={(text) => bindUserEmail(text)}
      />
      <Button label='Sign In' onPress={() => {}} />
      <Paragraph>{submission ? submission : 'Submission not sent'}</Paragraph>
    </View>
  );
}
