import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { cocktail } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: cocktail.strDrinkThumb }} style={styles.image} />
      <Text style={styles.drinkName}>{cocktail.strDrink}</Text>
      <Text style={styles.instructions}>{cocktail.strInstructions}</Text>
      <Text style={styles.ingredientsTitle}>Ingrédients:</Text>
      {Object.keys(cocktail)
        .filter(key => key.startsWith('strIngredient') && cocktail[key])
        .map((key, index) => (
          <Text key={cocktail[key] + index} style={styles.ingredient}>
            {cocktail[key]}: <Text style={styles.measure}>{cocktail[`strMeasure${index + 1}`]}</Text>
          </Text>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 15,
  },
  drinkName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  instructions: {
    fontSize: 16,
    marginBottom: 20,
    color: '#555',
    lineHeight: 1.5,
  },
  ingredientsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  ingredient: {
    fontSize: 16,
    color: '#444',
    marginBottom: 5,
  },
  measure: {
    fontStyle: 'italic',
    color: '#888',
  },
});

export default DetailsScreen;