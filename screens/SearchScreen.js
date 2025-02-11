import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

const SearchScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchCocktails = async (searchQuery) => {
    if (!searchQuery) {
      setResults([]);
      return;
    }
    setLoading(true);
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`);
    setResults(response.data.drinks || []);
    setLoading(false);
  };

  const handleInputChange = (input) => {
    setQuery(input);
    searchCocktails(input);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Rechercher un cocktail"
        value={query}
        onChangeText={handleInputChange}
        style={styles.searchInput}
      />
      <FlatList
        data={results}
        keyExtractor={item => item.idDrink}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Details', { cocktail: item })} style={styles.resultItem}>
            <Image source={{ uri: item.strDrinkThumb }} style={styles.image} />
            <Text style={styles.drinkName}>{item.strDrink}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={loading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  searchInput: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  listContainer: {
    paddingBottom: 20,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    padding: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 10,
  },
  drinkName: {
    fontSize: 18,
    color: '#333',
  },
});

export default SearchScreen;