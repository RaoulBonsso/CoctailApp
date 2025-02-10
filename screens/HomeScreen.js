import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCocktails = async () => {
    const tempCocktails = [];
    for (let i = 0; i < 10; i++) {
      const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      tempCocktails.push(response.data.drinks[0]);
    }
    setCocktails(tempCocktails);
    setLoading(false);
  };

  useEffect(() => {
    fetchCocktails();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <FlatList
      data={cocktails}
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

export default HomeScreen;