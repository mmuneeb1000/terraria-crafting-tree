import TreeNav from "../components/craftingTree/TreeNav";
import SearchBar from "../components/search/SearchBar";
import tree from "../data/tree.json";
import itemsData from "../data/items.json";

const items = Object.entries(tree)
  .map(([id, item]) => ({
    id,
    ...item,
    name: itemsData[id]?.name ?? item.item ?? id,
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

function TreeList() {
  return (
    <section className="flex flex-col gap-4 p-10">
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
