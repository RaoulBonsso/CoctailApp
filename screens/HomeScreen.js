import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  const fetchCocktails = async () => {
    const tempCocktails = [];
    for (let i = 0; i < 10; i++) {
      const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      tempCocktails.push(response.data.drinks[0]);
    }
    setCocktails(tempCocktails);
    setLoading(false);
  };

  const toggleFavorite = (cocktailId) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(cocktailId)) {
        return prevFavorites.filter(id => id !== cocktailId); // Retirer des favoris
      } else {
        return [...prevFavorites, cocktailId]; // Ajouter aux favoris
      }
    });
  };

  useEffect(() => {
    fetchCocktails();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={cocktails}
        keyExtractor={item => item.idDrink}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigation.navigate('Details', { cocktail: item })}
          >
            <Image source={{ uri: item.strDrinkThumb }} style={styles.image} />
            <Text style={styles.drinkName}>{item.strDrink}</Text>
            <TouchableOpacity 
              style={styles.favoriteButton} 
              onPress={() => toggleFavorite(item.idDrink)}
            >
              <FontAwesome 
                name={favorites.includes(item.idDrink) ? "heart" : "heart-o"} 
                size={24} 
                color="red" 
              />
            </TouchableOpacity>
          </TouchableOpacity>
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
  loader: {
    marginTop: 20,
  },
  listContainer: {
    paddingBottom: 20,
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
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 20,
    padding: 5,
  },
});

export default HomeScreen;