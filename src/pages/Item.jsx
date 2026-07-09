import { useParams } from "react-router-dom";
import { useEffect } from "react";
import items from "../data/items.json";
import trees from "../data/tree.json";
import ItemHeader from "../components/item/ItemHeader";
import ItemInfo from "../components/item/ItemStats";
import ItemRecipes from "../components/item/ItemRecipes";
import TreeRender from "../components/craftingTree/TreeRender";
import ItemPopular from "../components/item/ItemPopular";
import popular from "../data/popular.json";

function Item() {
  const { id } = useParams();

  const item = items[id];

  if (!item) {
    return <h1>Item not found</h1>;
  }
  const hasCraftingTree = Boolean(trees[id]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  return (
    <>
      <section className="px-2 py-6 mx-auto flex justify-center">
        <div className="max-w-100 p-4 flex flex-col">
          <ItemHeader item={item} id={id} />
          <ItemInfo item={item} />
        </div>

        {hasCraftingTree ? (
          <div>
            <TreeRender itemId={id} itemMap={items} />
          </div>
        ) : (
          <div className="ml-10 mt-4">
            <ItemRecipes itemId={id} itemMap={items} />
          </div>
        )}
      </section>
      <section>
        <ItemPopular title="Popular Items" items={popular} />
      </section>
    </>
  );
}

export default Item;
