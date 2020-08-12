/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';

import LoginView from './components/LoginView';
import HomeView from './components/HomeView';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Login'} component={LoginView} />
        <Stack.Screen name={'Home'} component={HomeView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
