import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const FavoritesScreen = ({ route }) => {
  const { cocktails, favorites } = route.params;

  const favoriteCocktails = cocktails.filter(cocktail => favorites.includes(cocktail.idDrink));

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteCocktails}
        keyExtractor={item => item.idDrink}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.strDrinkThumb }} style={styles.image} />
            <Text style={styles.drinkName}>{item.strDrink}</Text>
          </View>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  drinkName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
});

export default FavoritesScreen;