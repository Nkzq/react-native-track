import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationEvents } from 'react-navigation'

import { Context as AuthContext } from '../context/AuthContext'
import Spacer from '../components/Spacer'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SignupScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <Spacer>
        <AuthForm
          headerText="Sign up for Track"
          errorMessage={state.errorMessage}
          onSubmit={signup}
          submitLabel="Sign Up"
        />
        <NavLink
          route="Signin"
          label="Already have an account ? Sign in instead"
        />
      </Spacer>
    </View>
  )
}

SignupScreen.navigationOptions = () => ({
  headerShown: false,
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 50,
  },
})

export default SignupScreen