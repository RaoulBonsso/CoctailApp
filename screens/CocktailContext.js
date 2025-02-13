import React, { createContext, useState } from 'react';

export const CocktailContext = createContext();

export const CocktailProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [favorites, setFavorites] = useState([]);

  return (
    <CocktailContext.Provider value={{ cocktails, setCocktails, favorites, setFavorites }}>
      {children}
    </CocktailContext.Provider>
  );
};