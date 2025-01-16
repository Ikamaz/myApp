import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import iconImg from  '@/assets/images/coffee.jpg'
import React from 'react'

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={iconImg}
        resizeMode='cover'
        style={styles.image}
      >
        <Text style={styles.text}>SHONIAS YVERI</Text>
      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
})
