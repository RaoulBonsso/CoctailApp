import { createStore } from 'redux';

const initialState = {
  favorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return { ...state, favorites: [...state.favorites, action.payload] };
    // Ajoutez d'autres cas si nécessaire
    default:
      return state;
  }
};

export const store = createStore(reducer);