import React, { useContext } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { CocktailContext } from './CocktailContext'; // Chemin vers votre fichier de contexte

const FavoritesScreen = () => {
  const { cocktails, favorites } = useContext(CocktailContext);

  // Filtrer les cocktails favoris
  const favoriteCocktails = cocktails.filter(cocktail => favorites.includes(cocktail.idDrink));

  return (
    <View style={styles.container}>
      {favoriteCocktails.length > 0 ? (
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
      ) : (
        <Text style={styles.noFavorites}>Aucun cocktail favori trouvé.</Text>
      )}
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
  noFavorites: {
    fontSize: 18,
    textAlign: 'center',
    margin: 20,
    color: '#666',
  },
});

export default FavoritesScreen;