import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    navigation.replace('MainApp'); // Replace 'MainApp' with your Tab navigator screen name
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LoginScreen</Text>
      <Button title="Login and Go to Home" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    marginBottom: 20,
  },
});



// import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native'
// import React, { useState } from 'react'
// import Icon from 'react-native-vector-icons/Ionicons';
// //import Icon from 'react-native-vector-icons/FontAwesome';

// const LoginScreen = () => {

//    const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     console.log('Login with', email, password);
//     // Add navigation or API call here
//   };




//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Icon name="person-circle-outline" size={80} color="#fff" />
//         <Text style={styles.greeting}>Welcome Back!</Text>
//       </View>

//       <View style={styles.form}>
//         <TextInput
//           label="Email"
//           value={email}
//           onChangeText={setEmail}
//           mode="outlined"
//           left={<TextInput.Icon icon="email" />}
//           style={styles.input}
//         />
//         <TextInput
//           label="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//           mode="outlined"
//           left={<TextInput.Icon icon="lock" />}
//           style={styles.input}
//         />
//         <Button mode="contained" onPress={handleLogin} style={styles.button}>
//           Login
//         </Button>
//         <Text style={styles.signupText}>
//           Don’t have an account? <Text style={{ color: '#007bff' }}>Sign Up</Text>
//         </Text>
//       </View>
//     </View>
//   )
// }

// export default LoginScreen

// const styles = StyleSheet.create({
//      container: {
//     flex: 1,
//     backgroundColor: '#121212',
//     padding: 20,
//     justifyContent: 'center',
//   },
//   header: {
//     alignItems: 'center',
//     marginBottom: 40,
//   },
//   greeting: {
//     fontSize: 22,
//     color: '#fff',
//     marginTop: 10,
//     fontWeight: 'bold',
//   },
//   form: {
//     gap: 16,
//   },
//   input: {
//     backgroundColor: '#1e1e1e',
//   },
//   button: {
//     marginTop: 10,
//     paddingVertical: 5,
//   },
//   signupText: {
//     marginTop: 20,
//     textAlign: 'center',
//     color: '#aaa',
//   },
// })