import { useParams } from "react-router-dom";
import items from "../data/items.json";

import ItemHeader from "../components/item/ItemHeader";
import ItemInfo from "../components/item/ItemStats";
import ItemRecipes from "../components/item/ItemRecipes";

function Item() {
  const { id } = useParams();

  const item = items[id];

  if (!item) {
    return <h1>Item not found</h1>;
  }

  return (
    <>
      <ItemHeader item={item} id={id} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ItemInfo item={item} />
      </div>

      <ItemRecipes itemId={id} itemMap={items} />
    </>
  );
}

export default Item;
