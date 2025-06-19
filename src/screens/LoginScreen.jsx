import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const LoginScreen = ({navigation }) => {
  
   const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   const handleLogin = () => {
    // You can add validation/login logic here
    navigation.replace('MainApp');
  };

  const handleSignup = () => {
    navigation.navigate('SignUpScreen'); // Make sure 'Signup' screen exists in your navigator
  };


  return (
    <View style={styles.container}>

       <Image
        source={require('../assets/rtologo.png')} // adjust path
        style={styles.logo}
        resizeMode="contain"
      />
     
       <Text style={styles.title}>Login to RTO</Text>
          
          <TextInput 
           style={styles.input}
             placeholder="Email"
              placeholderTextColor="#aaa"
               value={email}
               onChangeText={setEmail}
          />

          <TextInput
           style={styles.input}
           placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
         onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.loginBtn}  onPress={handleLogin}  >
                   <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
     
        <TouchableOpacity     onPress={handleSignup}>
        <Text style={styles.signupText} >
          Don't have an account? <Text style={styles.signupLink}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
    
   title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#222',
    padding: 12,
    marginBottom: 16,
    borderRadius: 8,
    color: '#fff',
  },
  loginBtn: {
    backgroundColor: '#39FF14',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 20,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  signupText: {
    color: '#aaa',
  },
  signupLink: {
    color: '#39FF14',
    fontWeight: 'bold',
  },
})