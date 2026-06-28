import { Link } from "react-router-dom";
import recipes from "../data/recipes.json";
import items from "../data/items.json";

function RecipeList() {
  const recipeItems = Object.keys(recipes)
    .map((id) => ({
      id,
      name: items[id]?.name ?? id,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <h1>Recipes</h1>

      <div className="flex flex-wrap gap-2">
        {recipeItems.map((item) => (
          <div key={item.id} className="p-2">
            <Link
              to={`/item/${item.id}`}
              className="border p-2 hover:bg-gray-100"
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
