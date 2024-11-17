import create from 'zustand';
import { updateRecipe, deleteRecipe } from '../recipeStore';
import updateRecipe from '../recipeStore';


export const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
}));

export const updateRecipe = (id, updatedData) => {
  console.log(`Updating recipe with ID: ${id}`);
  // Update logic here
};

export const deleteRecipe = (id) => {
  console.log(`Deleting recipe with ID: ${id}`);
  // Delete logic here
};

