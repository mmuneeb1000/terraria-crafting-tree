import { Link } from "react-router-dom";

import trees from "../../data/tree.json";

function TreeRender({ itemId, itemMap }) {
  const tree = trees[itemId];

  if (!tree) return null;

  const renderNode = (node, depth = 0) => {
    const item = itemMap[node.item];

    if (!item) return null;

    return (
      <div key={`${node.item}-${depth}`} className="relative">
        <div className="w-100 flex items-center gap-3 rounded-lg border bg-background p-3">
          <img src={[item.name]} alt={item.name} className="h-8 w-8" />

          <span className="font-medium text-indigo">{node.amount}×</span>

          <Link
            to={`/item/${node.item}`}
            className="text-green hover:text-sky-400 hover:underline"
          >
            {item.name}
          </Link>

          {node.station && (
            <span className="ml-auto text-sm text-black">
              Station: {node.station}
            </span>
          )}
        </div>

        {node.ingredients?.length > 0 && (
          <div className="ml-8 mt-6 pl-8 space-y-4">
            {node.ingredients.map((ingredient) =>
              renderNode(ingredient, depth + 1),
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Crafting Tree</h2>
      {renderNode(tree)}
    </section>
  );
}

export default TreeRender;
