export function getRecipes(itemId, recipes) {
  return recipes[itemId] ?? [];
}

export function hasRecipe(itemId, recipes) {
  return getRecipes(itemId, recipes).length > 0;
}
