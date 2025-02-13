import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './navigation/RootStackNavigator';
import { CocktailProvider } from './screens/CocktailContext'; // Chemin vers votre fichier de contexte

export default function App() {
  return (
    <CocktailProvider>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </CocktailProvider>
  );
}