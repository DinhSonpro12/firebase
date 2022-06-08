// Login.js
import React, {Component} from 'react'
import TrangChu from './view/TrangChu'
import Login from './view/Login'
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, View, Button, Image, SafeAreaView, Alert, StatusBar} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <SafeAreaView>
      <StatusBar barStyle='light-content'></StatusBar>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={TrangChu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;