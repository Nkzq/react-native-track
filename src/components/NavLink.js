import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'

import Spacer from './Spacer'


const NavLink = ({ navigation, route, label }) => {
  return (
    <Spacer>
      <TouchableOpacity
        onPress={() => navigation.navigate(route)}
      >
        <Text style={styles.link}>{ label }</Text>
      </TouchableOpacity>
    </Spacer>
  )
}

const styles = StyleSheet.create({
  link: {
    color: 'blue',
  },
})

export default withNavigation(NavLink)