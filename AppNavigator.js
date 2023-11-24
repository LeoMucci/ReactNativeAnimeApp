import React from 'react'; 

import { createStackNavigator } from '@react-navigation/stack'; 

import { NavigationContainer } from '@react-navigation/native'; 

 

import HomeScreen from './Screens/HomeScreen'; 

import AddAnimeScreen from './Screens/AddAnimeScreen'; 

import EditAnimeScreen from './Screens/EditAnimeScreen'; 

import ViewAnimeScreen from './Screens/ViewAnimeScreen'; 

 

const Stack = createStackNavigator(); 

 

function AppNavigator() { 

 return ( 

  <NavigationContainer> 

   <Stack.Navigator initialRouteName="Home"> 

    <Stack.Screen name="Home" component={HomeScreen} /> 

    <Stack.Screen name="AddAnime" component={AddAnimeScreen} /> 

    <Stack.Screen name="EditAnime" component={EditAnimeScreen} /> 

    <Stack.Screen name="ViewAnime" component={ViewAnimeScreen} /> 

   </Stack.Navigator> 

  </NavigationContainer> 

 ); 

} 

 

export default AppNavigator;