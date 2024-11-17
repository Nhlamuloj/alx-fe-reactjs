
let recipes = [];

export function addRecipe(recipe) {
    recipes.push(recipe);
    return recipes;
}

export function updateRecipe(id, updatedRecipe) {
    const index = recipes.findIndex(r => r.id === id);
    if (index !== -1) {
        recipes[index] = { ...recipes[index], ...updatedRecipe };
    }
    return recipes;
}

export function deleteRecipe(id) {
    recipes = recipes.filter(r => r.id !== id);
    return recipes;
}

export function getRecipes() {
    return recipes;
}
