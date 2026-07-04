import { Link } from "react-router-dom";
import recipes from "../../data/recipes.json";
import images from "../../utils/imageMap";

function ItemRecipes({ itemId, itemMap }) {
  const itemRecipes = recipes[itemId];
  const toImageKey = (name) =>
    name
      .toLowerCase()
      .replace(/'/g, "")
      .replace(/&/g, "and")
      .replace(/\s+/g, "_");

  if (!itemRecipes?.length) return null;

  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Recipes</h2>

      <div className="space-y-6">
        {itemRecipes.map((recipe, index) => (
          <div key={index} className="rounded-xl border p-4">
            <p className="mb-4">
              <strong>Crafting Station:</strong> {recipe.station}
            </p>

            <div>
              <h3 className="font-semibold mb-2">Ingredients</h3>

              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient) => {
                  return (
                    <li
                      key={ingredient.item}
                      className="flex items-center gap-3"
                    >
                      <img
                        src={images[itemMap[ingredient.item]?.name]}
                        alt={itemMap[ingredient.item]?.name}
                        className="w-8 h-8"
                      />

                      <span>{ingredient.amount}×</span>

                      <Link
                        to={`/item/${ingredient.item}`}
                        className="hover:text-sky-400 hover:underline"
                      >
                        {itemMap[ingredient.item]?.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-4">
              Produces: {recipe.amount} × {itemMap[itemId].name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ItemRecipes;
