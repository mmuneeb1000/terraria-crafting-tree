import { Link } from "react-router-dom";
import recipes from "../../data/recipes.json";

function ItemRecipes({ itemId, itemMap }) {
  const itemRecipes = recipes[itemId];
  if (!itemRecipes?.length) return null;

  return (
    <section>
      <h2 className="text-xl font-bold my-4">Recipes</h2>

      <div className="w-200 gap-5">
        {itemRecipes.map((recipe, index) => (
          <div
            key={index}
            className="rounded-xl border border-accent p-4 text-sm bg-background"
          >
            <p className="mb-4">
              <strong>Crafting Station:</strong> {recipe.station}
            </p>

            <div>
              <span className="font-semibold text-base">Ingredients</span>

              <ul className="flex flex-wrap gap-3 p-4">
                {recipe.ingredients.map((ingredient) => {
                  return (
                    <li
                      key={ingredient.item}
                      className="flex items-center gap-3"
                    >
                      <img
                        src={`../images/${ingredient.item}.png`}
                        alt={itemMap[ingredient.item]?.name}
                        className="w-4"
                      />

                      <span>{ingredient.amount}×</span>

                      <Link
                        to={`/item/${ingredient.item}`}
                        className=" hover:text-sky-400 hover:underline"
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
