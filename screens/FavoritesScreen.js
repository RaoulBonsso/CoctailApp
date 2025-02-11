import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useSelector } from 'react-redux';

const FavoritesScreen = ({ navigation }) => {
  const favorites = useSelector(state => state.favorites);

  if (favorites.length === 0) {
    return <Text>Aucun cocktail favori trouvé.</Text>;
  }

  return (
    <FlatList
      data={favorites}
      keyExtractor={item => item.idDrink}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Details', { cocktail: item })}>
          <Image source={{ uri: item.strDrinkThumb }} style={{ width: 100, height: 100 }} />
          <Text>{item.strDrink}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default FavoritesScreen;