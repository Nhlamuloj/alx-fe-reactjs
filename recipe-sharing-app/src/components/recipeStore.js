
import create from 'zustand';
import  { createContext, useState, useContext } from 'react';

const useRecipeStore = create(set => ({
  recipes: [], 
  favorites: [], 
  addFavorite: (recipeId) => set(state => ({ 
    favorites: [...state.favorites, recipeId] 
  })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  recommendations: [], 
  generateRecommendations: () => set(state => {
    
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5 
    );
    return { recommendations: recommended };
  }),
}));


// Create the context
const RecipeContext = createContext();

// Provider component
export const RecipeProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <RecipeContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </RecipeContext.Provider>
  );
};

// Custom hook for consuming the context
export const useRecipeStores = () => {
  return useContext(RecipeContext);
};

