import React, { useState } from 'react'
import { Text, Button, Input } from 'react-native-elements'
import { StyleSheet } from 'react-native'

import Spacer from './Spacer'

const AuthForm = ({ headerText, errorMessage, onSubmit, submitLabel }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <>
      <Spacer>
        <Text style={styles.heading} h3>{ headerText }</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setEmail}
      />
      <Spacer />
      <Input
        label="Password"
        secureTextEntry
        value={password}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setPassword}
      />
      { errorMessage
        ? <Text style={styles.errorMessage}>{errorMessage}</Text>
        : null
      }
      <Spacer>
        <Button
          title={submitLabel}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  )
}

const styles = StyleSheet.create({
  heading: {
    marginBottom: 40,
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginHorizontal: 15,
  },
})

export default AuthForm
