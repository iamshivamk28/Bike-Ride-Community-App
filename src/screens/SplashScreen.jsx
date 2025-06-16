import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = ({navigation }) => {

    useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('LoginScreen'); // Replace with your login or home screen
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/rtologo.png')} // <-- Replace with your logo
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.tagline}>NEVER STOP EXPLORING</Text>
    </View>
  );
};

export default SplashScreen

const styles = StyleSheet.create({

     container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 120,
    width: 120,
    marginBottom: 20,
  },
  tagline: {
    color: '#fff',
    fontSize: 16,
    letterSpacing: 1,
    fontWeight: '600',
  },
})