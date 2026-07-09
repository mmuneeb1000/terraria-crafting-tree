import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ItemRecipes({ itemId, itemMap }) {
  const [recipes, setRecipes] = useState({});

  useEffect(() => {
    async function loadRecipes() {
      const res = await fetch("/data/recipes.json");
      const data = await res.json();
      setRecipes(data);
    }

    loadRecipes();
  }, []);

  const itemRecipes = recipes[itemId];

  if (!itemRecipes?.length) return null;

  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold">Recipes</h2>

      <div className="lg:w-200 lg:gap-5">
        {itemRecipes.map((recipe, index) => (
          <div
            key={index}
            className="rounded-xl border border-accent bg-background p-4 text-sm"
          >
            <p className="mb-4">
              <strong>Crafting Station:</strong> {recipe.station}
            </p>

            <div>
              <span className="text-base font-semibold">Ingredients</span>

              <ul className="flex flex-wrap gap-3 p-4">
                {recipe.ingredients.map((ingredient) => (
                  <li key={ingredient.item} className="flex items-center gap-3">
                    <img
                      src={`/images/${ingredient.item}.png`}
                      alt={itemMap[ingredient.item]?.name}
                      className="w-4"
                    />

                    <span>{ingredient.amount}×</span>

                    <Link
                      to={`/item/${ingredient.item}`}
                      className="hover:text-sky-400 hover:underline"
                    >
                      {itemMap[ingredient.item]?.name}
                    </Link>
                  </li>
                ))}
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
