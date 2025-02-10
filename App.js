import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </Provider>
  );
}