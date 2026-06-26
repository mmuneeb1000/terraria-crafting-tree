import { Link } from "react-router-dom";
import { getRecipes } from "../../utils/recipeHelper";

function TreeNode({ ingredient, recipes, itemMap, visited = new Set() }) {
  const item = itemMap[ingredient.item];
  const itemRecipes = getRecipes(ingredient.item, recipes);

  // Prevent infinite recursion
  if (visited.has(ingredient.item)) {
    return (
      <li>
        {ingredient.amount} × {item?.name ?? ingredient.item}
      </li>
    );
  }

  const nextVisited = new Set(visited);
  nextVisited.add(ingredient.item);

  return (
    <li className="relative ml-6 pl-6 border-l border-gray-600">
      <span className="absolute left-0 top-3 w-4 border-t border-gray-600" />

      <div>
        {ingredient.amount} ×{" "}
        {item ? (
          <Link
            to={`/item/${ingredient.item}`}
            className="text-blue-500 hover:underline"
          >
            {item.name}
          </Link>
        ) : (
          ingredient.item
        )}
      </div>

      {itemRecipes.length > 0 && (
        <ul className="mt-2 space-y-2">
          {itemRecipes[0].ingredients.map((child, index) => {
            if (Array.isArray(child)) return null;

            return (
              <TreeNode
                key={`${child.item}-${index}`}
                ingredient={child}
                recipes={recipes}
                itemMap={itemMap}
                visited={nextVisited}
              />
            );
          })}
        </ul>
      )}
    </li>
  );
}

export default TreeNode;
