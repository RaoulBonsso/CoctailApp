import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const CategoriesScreen = ({ navigation }) => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    setCategories(response.data.drinks);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCategorySelect = (category) => {
    navigation.navigate('CategoryCocktails', { category }); // Vous devrez créer ce nouvel écran
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={item => item.strCategory}
        renderItem={({ item }) => (
          <Button title={item.strCategory} onPress={() => handleCategorySelect(item.strCategory)} />
        )}
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
});

export default CategoriesScreen;