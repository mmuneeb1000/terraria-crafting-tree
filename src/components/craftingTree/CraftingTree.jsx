import TreeNode from "./TreeNode";

function CraftingTree({ itemId, recipe, recipes, itemMap }) {
  return (
    <article className="rounded-lg border p-4">
      <h2 className="text-xl font-bold mb-2">{itemMap[itemId]?.name}</h2>

      <p className="mb-4">Station: {recipe.station ?? "By Hand"}</p>

      <ul>
        {recipe.ingredients.map((ingredient, index) => {
          if (Array.isArray(ingredient)) return null;

          return (
            <TreeNode
              key={`${ingredient.item}-${index}`}
              ingredient={ingredient}
              recipes={recipes}
              itemMap={itemMap}
            />
          );
        })}
      </ul>
    </article>
  );
}

export default CraftingTree;
