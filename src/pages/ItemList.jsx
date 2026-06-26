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
      <h1>Items</h1>

      <div className="grid grid-cols-4 gap-3">
        {sortedItems.map((item) => (
          <div key={item.id}>
            <Link to={`/item/${item.id}`}>{item.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
