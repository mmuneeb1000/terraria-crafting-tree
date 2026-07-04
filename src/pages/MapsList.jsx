import { Link } from "react-router-dom";
import tree from "../data/tree.json";

function formatName(id) {
  return id
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function MapsList() {
  const sortedItems = Object.entries(tree)
    .map(([id, item]) => ({
      id,
      ...item,
      name: formatName(item.item ?? id),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <h1 className="text-center mb-4 pb-8">Crafting Trees</h1>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {sortedItems.map((item) => (
          <div className="p-2 mb-4" key={item.id}>
            <Link
              to={`/item/${item.id}`}
              className="border text-white font-semibold bg-primary p-4 rounded-xl hover:bg-primary-hover"
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MapsList;
