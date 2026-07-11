import { useEffect, useState } from "react";
import TreeNav from "../components/craftingTree/TreeNav";
import SearchBar from "../components/search/SearchBar";

function TreeList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function loadData() {
      const [tree, itemsData] = await Promise.all([
        fetch("/data/tree.json").then((r) => r.json()),
        fetch("/data/items.json").then((r) => r.json()),
      ]);

      const list = Object.entries(tree)
        .map(([id, item]) => ({
          id,
          ...item,
          name: itemsData[id]?.name ?? item.item ?? id,
        }))
        .sort((a, b) => a.name.localeCompare(b.name));

      setItems(list);
    }

    loadData();
  }, []);

  return (
    <section className="flex flex-col gap-4 p-4">
      <SearchBar
        data={items}
        keys={["name"]}
        placeholder="Search crafting trees..."
      >
        {(results) => <TreeNav items={results} />}
      </SearchBar>
    </section>
  );
}

export default TreeList;
