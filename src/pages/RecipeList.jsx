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
      <h1 className="text-center">Recipes</h1>

      <div className="flex flex-wrap justify-center gap-2 p-2">
        {recipeItems.map((item) => (
          <div key={item.id} className="p-2">
            <Link
              to={`/item/${item.id}`}
              className="border-2 border-dashed border-accent bg-background p-2 rounded-xl hover:bg-gray-100"
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
