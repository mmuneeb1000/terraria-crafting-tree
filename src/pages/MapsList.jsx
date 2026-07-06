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
      <h1 className="text-center pb-3">Crafting Trees</h1>
      <div className="flex flex-wrap justify-center mb-4">
        {sortedItems.map((item) => (
          <div className="flex items-center p-3" key={item.id}>
            <Link
              to={`/item/${item.id}`}
              className="border-2 border-dashed border-accent text-white font-semibold bg-primary p-2 rounded-xl hover:bg-primary-hover"
            >
              <img
                src={`../public/images/${item.id}.png`}
                alt={item.name}
                className="inline-block w-6"
              />
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MapsList;
