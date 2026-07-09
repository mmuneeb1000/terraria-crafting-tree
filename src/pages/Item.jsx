import { useParams } from "react-router-dom";
import items from "../data/items.json";
import trees from "../data/tree.json";
import ItemHeader from "../components/item/ItemHeader";
import ItemInfo from "../components/item/ItemStats";
import ItemRecipes from "../components/item/ItemRecipes";
import TreeRender from "../components/craftingTree/TreeRender";
import Popular from "../components/item/ItemPopular";
import popularItems from "../data/popular.json";

function Item() {
  const { id } = useParams();

  const item = items[id];

  if (!item) {
    return <h1>Item not found</h1>;
  }
  const hasCraftingTree = Boolean(trees[id]);

  return (
    <>
      <section
        className={`min-h-[75vh] px-4 py-6 gap-10 justify-center
      ${hasCraftingTree ? "lg:grid lg:grid-cols-[300px_1fr]" : "flex"}`}
      >
        <div className="max-w-88">
          <ItemHeader item={item} id={id} />
          <ItemInfo item={item} />
        </div>

        {hasCraftingTree ? (
          <div className="flex items-start">
            <TreeRender itemId={id} itemMap={items} />
          </div>
        ) : (
          <div className="flex max-w-md">
            <ItemRecipes itemId={id} itemMap={items} />
          </div>
        )}
        <Popular title="Popular Crafting Items" items={popularItems} />
      </section>
    </>
  );
}

export default Item;
