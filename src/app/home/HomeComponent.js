import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native'

function HomeComponent() {
  return (
    <View style={styles.container}>
      <Text>HomeController</Text>
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

export default HomeComponent
