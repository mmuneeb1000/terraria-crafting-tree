import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import items from "/data/items.json?url";
import trees from "/data/tree.json?url";
import popular from "/data/popular.json?url";
import ItemHeader from "../components/item/ItemHeader";
import ItemInfo from "../components/item/ItemStats";
import ItemRecipes from "../components/item/ItemRecipes";
import TreeRender from "../components/craftingTree/TreeRender";
import ItemPopular from "../components/item/ItemPopular";
import Loading from "../components/ui/Loading";
import SocialShare from "../components/ui/SocialShare";

function Item() {
  const { id } = useParams();

  const [items, setItems] = useState({});
  const [trees, setTrees] = useState({});
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    async function loadData() {
      const [itemsRes, treesRes, popularRes] = await Promise.all([
        fetch("/data/items.json"),
        fetch("/data/tree.json"),
        fetch("/data/popular.json"),
      ]);

      const [itemsData, treesData, popularData] = await Promise.all([
        itemsRes.json(),
        treesRes.json(),
        popularRes.json(),
      ]);

      setItems(itemsData);
      setTrees(treesData);
      setPopular(popularData);
    }

    loadData();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  const item = items[id];

  if (!item) {
    return <Loading />;
  }

  const hasCraftingTree = Boolean(trees[id]);

  return (
    <>
      <section className="max-w-320 px-2 py-6 mx-auto flex flex-col justify-center">
        <div className="max-w-250 mx-auto">
          <ItemHeader item={item} id={id} />
          <ItemInfo item={item} />
        </div>

        {hasCraftingTree ? (
          <div className="lg:w-auto overflow-x-auto p-2">
            <TreeRender itemId={id} itemMap={items} />
          </div>
        ) : (
          <div className="p-4 lg:ml-10 lg:mt-4">
            <ItemRecipes itemId={id} itemMap={items} />
          </div>
        )}
      </section>
      <section>
        <SocialShare />
      </section>
      <section>
        <ItemPopular title="Popular Items" items={popular} />
      </section>
    </>
  );
}

export default Item;
