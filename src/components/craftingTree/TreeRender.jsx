import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import trees from "../../data/tree.json";

function TreeRender({ itemId, itemMap }) {
  const tree = trees[itemId];
  if (!tree) return null;

  const groupIngredients = (ingredients = []) => {
    const seen = new Set();
    const groups = [];

    ingredients.forEach((ingredient) => {
      if (ingredient.group) {
        if (seen.has(ingredient.group)) return;
        seen.add(ingredient.group);
        groups.push({
          type: "group",
          key: ingredient.group,
          items: ingredients.filter((i) => i.group === ingredient.group),
        });
      } else {
        groups.push({ type: "single", key: ingredient.item, item: ingredient });
      }
    });

    return groups;
  };

  const renderNode = (node) => {
    const item = itemMap[node.item];
    if (!item) return null;

    const groupedIngredients = groupIngredients(node.ingredients);

    return (
      <div key={node.item} className="flex items-center justify-center gap-4 ">
        <div
          className="w-46 shrink-0 rounded-lg border-2 border-accent
          bg-background p-2 hover:scale-110 transition"
        >
          <div className="flex items-center gap-2">
            <span className="w-6">
              <img src={`../images/${node.item}.png`} />
            </span>
            <span className="font-medium text-[12px] text-indigo">
              {node.amount}×
            </span>
            <Link
              to={`/item/${node.item}`}
              className="font-semibold text-sm text-green hover:text-sky-400 hover:underline"
            >
              {item.name}
            </Link>
          </div>
          {node.station && (
            <p className="mt-2 text-xs text-black">Station: {node.station}</p>
          )}
        </div>

        {groupedIngredients.length > 0 && (
          <>
            <div className="h-px w-8 bg-neutral-500 shrink-0" />
            <div className="flex flex-col gap-4 p-4 rounded-lg border-1 border-dashed border-accent">
              {groupedIngredients.map((entry) =>
                entry.type === "group" ? (
                  <div
                    key={entry.key}
                    className="flex items-center gap-4 rounded-lg border-1 border-accent border-dashed p-2"
                  >
                    <span className="text-xs font-semibold uppercase text-neutral-500">
                      One of
                    </span>
                    <div className="flex flex-col gap-2">
                      {entry.items.map((ingredient) => (
                        <div key={ingredient.item}>
                          {renderNode(ingredient)}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div key={entry.key}>{renderNode(entry.item)}</div>
                ),
              )}
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <section className="overflow-x-auto overflow-y-hidden bg-background/50 rounded-2xl ">
      <h2 className="my-6 text-2xl text-center font-bold">Crafting Tree</h2>
      <div className="min-w-max p-6">
        {renderNode(tree)}
        <span className="p-4 mb-10 text-xs text-indigo">**Scroll To Right</span>
      </div>
    </section>
  );
}

export default TreeRender;
