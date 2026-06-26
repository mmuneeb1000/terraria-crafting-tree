export function getRecipes(itemId, recipes) {
  const itemRecipes = recipes?.[itemId] ?? [];

  return [...itemRecipes].sort((a, b) => {
    if (a.station === "By Hand" && b.station !== "By Hand") return 1;
    if (a.station !== "By Hand" && b.station === "By Hand") return -1;
    return 0;
  });
}
