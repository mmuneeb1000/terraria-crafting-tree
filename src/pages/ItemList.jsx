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
      <h1 className="text-center mb-4 pb-4">Items</h1>

      <div className="flex flex-wrap justify-center gap-2">
        {sortedItems.map((item) => (
          <div className="p-1 " key={item.id}>
            <Link
              to={`/item/${item.id}`}
              className="border-2 border-dashed border-accent p-1 bg-background rounded-l hover:bg-gray-100"
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
