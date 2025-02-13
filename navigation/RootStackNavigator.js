import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from '../DrawerNavigator';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createStackNavigator();

export default function RootStackNavigator({ favorites, setFavorites }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeDrawer">
        {(props) => <DrawerNavigator {...props} favorites={favorites} setFavorites={setFavorites} />}
      </Stack.Screen>
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}