import { Link } from "react-router-dom";
import recipes from "../../data/recipes.json";
import TreeRender from "../craftingTree/TreeRender";

function ItemRecipes({ itemId, itemMap }) {
  const itemRecipes = recipes[itemId];
  if (!itemRecipes?.length) return null;

  return (
    <section>
      <h2 className="text-xl font-bold my-4">Recipes</h2>

      <div className="space-y-6 gap-5 grid grid-cols-3">
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
                        src={`../public/images/${ingredient.item}.png`}
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
      <TreeRender itemId={itemId} itemMap={itemMap} />
    </section>
  );
}

export default ItemRecipes;
