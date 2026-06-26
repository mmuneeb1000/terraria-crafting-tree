import CraftingTree from "./CraftingTree";
import { getRecipes } from "../../utils/recipeHelper";

function ItemRecipeTrees({ itemId, recipes, itemMap }) {
  const itemRecipes = getRecipes(itemId, recipes);

  if (itemRecipes.length === 0) {
    return <p>No recipes.</p>;
  }

  return (
    <section className="space-y-8">
      {itemRecipes.map((recipe, index) => (
        <CraftingTree
          key={index}
          itemId={itemId}
          recipe={recipe}
          recipes={recipes}
          itemMap={itemMap}
        />
      ))}
    </section>
  );
}

export default ItemRecipeTrees;
