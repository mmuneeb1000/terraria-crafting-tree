import { useParams } from "react-router-dom";
import items from "../data/items.json";

import ItemHeader from "../components/item/ItemHeader";
import ItemInfo from "../components/item/ItemStats";
import ItemRecipes from "../components/item/ItemRecipes";
import TreeRender from "../components/craftingTree/TreeRender";

function Item() {
  const { id } = useParams();

  const item = items[id];

  if (!item) {
    return <h1>Item not found</h1>;
  }

  return (
    <>
      <section className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <ItemHeader item={item} id={id} />

          <ItemInfo item={item} />
        </div>

        <ItemRecipes itemId={id} itemMap={items} />
      </section>
      <TreeRender itemId={id} itemMap={items} />
    </>
  );
}

export default Item;
