import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';

const SearchScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchCocktails = async () => {
    if (!query) return;
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
    setResults(response.data.drinks || []);
  };

  return (
    <View>
      <TextInput
        placeholder="Rechercher un cocktail"
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Rechercher" onPress={searchCocktails} />
      <FlatList
        data={results}
        keyExtractor={item => item.idDrink}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Details', { cocktail: item })}>
            <Image source={{ uri: item.strDrinkThumb }} style={{ width: 100, height: 100 }} />
            <Text>{item.strDrink}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SearchScreen;