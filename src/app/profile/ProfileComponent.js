import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native'

function ProfileComponent() {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default ProfileComponent
