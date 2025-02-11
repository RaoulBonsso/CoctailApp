import React from 'react';
import { View, Text, Image } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { cocktail } = route.params;

  return (
    <View>
      <Image source={{ uri: cocktail.strDrinkThumb }} style={{ width: 200, height: 200 }} />
      <Text>{cocktail.strDrink}</Text>
      <Text>{cocktail.strInstructions}</Text>
      {/* Liste des ingrédients */}
      {Object.keys(cocktail)
        .filter(key => key.startsWith('strIngredient') && cocktail[key])
        .map((key, index) => (
          <Text key={cocktail[key] + index}> {/* Utilisez une clé unique */}
            {cocktail[key]}: {cocktail[`strMeasure${index + 1}`]}
          </Text>
        ))}
    </View>
  );
};

export default DetailsScreen;