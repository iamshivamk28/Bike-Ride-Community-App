import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Explore from './src/screens/Explore'
import Gallery from './src/screens/Gallery'
import Profile from './src/screens/Profile'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from './src/screens/SplashScreen'
import LoginScreen from './src/screens/LoginScreen'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const MyStack = () =>{
//   return(
//     <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
//       <Stack.Screen  name="SplashScreen" component={SplashScreen}/>
//       <Stack.Screen name="LoginScreen" component={LoginScreen}/>
//     </Stack.Navigator>
//   )
// }



const MyTab =()=>{
  return(
     <Tab.Navigator  >
      <Tab.Screen  name="HomeScreen" component={HomeScreen} options={{headerShown:false}}  />
      <Tab.Screen  name="Explore" component={Explore} options={{headerShown:false}} />
      <Tab.Screen  name="Gallery" component={Gallery} options={{headerShown:false}}/>
      <Tab.Screen name="Profile"  component={Profile} options={{headerShown:false}} /> 
     </Tab.Navigator>
  )
} 




const App = () => {


  return (
    <NavigationContainer>

    <Stack.Navigator  screenOptions={{ headerShown: false }}>
          <Stack.Screen  name="SplashScreen" component={SplashScreen}/>
           <Stack.Screen name="LoginScreen" component={LoginScreen}/>
             <Stack.Screen name="MainApp" component={MyTab} />
     </Stack.Navigator>
    
    
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})