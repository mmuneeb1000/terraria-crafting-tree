import { Link } from "react-router-dom";

function ItemRecipes({ recipes, itemMap }) {
  if (!recipes?.length) return null;

  return (
    <div>
      <h2>Recipes</h2>

      <div className="grid grid-cols-1 gap-4">
        {recipes.map((recipe, i) => (
          <div key={i} className="border p-3 rounded">
            <div>Station: {recipe.station ?? "None"}</div>

            <ul className="mt-2">
              {recipe.ingredients.map((ing, j) => {
                const exists = itemMap[ing.item];

                return (
                  <li key={j}>
                    {ing.amount} ×{" "}
                    {exists ? (
                      <Link
                        to={`/item/${ing.item}`}
                        className="text-blue-600 hover:underline"
                      >
                        {exists.name}
                      </Link>
                    ) : (
                      <span>{ing.item}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ItemRecipes;
