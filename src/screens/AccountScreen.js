import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'

import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const AccountScreen = () => {
  const { signout } = useContext(AuthContext)
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Spacer>
        <Text h4>Account Screen</Text>
      </Spacer>
      <Spacer>
        <Button
          title="Sign Out"
          onPress={signout}
        />
      </Spacer>
    </SafeAreaView>
  )
}

AccountScreen.navigationOptions = () => ({
  title: 'Account',
  tabBarIcon: <FontAwesome name="gear" size={20} />
})

const styles = StyleSheet.create({})

export default AccountScreen