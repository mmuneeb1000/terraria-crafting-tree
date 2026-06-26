import { Link } from "react-router-dom";
import items from "../data/items.json";

function ItemList() {
  const sortedItems = Object.entries(items)
    .map(([id, item]) => ({
      id,
      ...item,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <h1 className="text-center mb-8 pb-8 border-b">Items</h1>

      <div className="flex flex-wrap gap-2">
        {sortedItems.map((item) => (
          <div className="p-2" key={item.id}>
            <Link
              to={`/item/${item.id}`}
              className="border p-2  hover:bg-gray-100"
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
