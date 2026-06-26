import { Link } from "react-router-dom";

function ItemRecipes({ recipes, itemMap }) {
  if (!recipes?.length) return null;

  return (
    <div>
      <h2 className="text-center mt-6">Recipes</h2>

      <div className="grid grid-cols-1 gap-4">
        {recipes.map((recipe, i) => (
          <div key={i} className="border p-3 rounded">
            <div className="text-primary">
              Station: {recipe.station ?? "None"}
            </div>

            <ul className="mt-2">
              {recipe.ingredients.map((ing, j) => {
                if (Array.isArray(ing)) {
                  return (
                    <li key={j}>
                      Any of:
                      <ul className="ml-4 list-disc">
                        {ing.map((alt) => {
                          const exists = itemMap[alt.item];

                          return (
                            <li key={alt.item}>
                              {alt.amount} ×{" "}
                              {exists ? (
                                <Link
                                  to={`/item/${alt.item}`}
                                  className="text-blue-600 hover:underline"
                                >
                                  {exists.name}
                                </Link>
                              ) : (
                                <span>{alt.item}</span>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                }

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
