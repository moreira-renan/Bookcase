import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/Login';
import Home from './src/Home';
import About from './src/About';
import BookCase from './src/BookCase';
import Register from './src/Register';
import BookRegister from './src/BookRegister';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{title: 'Login'}}/>  
        <Stack.Screen name="Início" component={Home} opitions={{titlie: 'Início', headerLeft: null}}/>
        <Stack.Screen name="Sobre" component={About}/>
        <Stack.Screen name="Estante" component={BookCase}/>
        <Stack.Screen name="Registro" component={Register}/>
        <Stack.Screen name="Registro de livro" component={BookRegister}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
  }
}