import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import CategoriesScreen from './CategoriesScreen'; // Créez ce fichier

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({ favorites, setFavorites }) {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" options={{ title: 'Home' }}>
        {(props) => <BottomTabNavigator {...props} favorites={favorites} setFavorites={setFavorites} />}
      </Drawer.Screen>
      <Drawer.Screen name="Categories" component={CategoriesScreen} />
    </Drawer.Navigator>
  );
}