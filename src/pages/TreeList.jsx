import TreeNav from "../components/craftingTree/TreeNav";
import SearchBar from "../components/search/SearchBar";
import tree from "../data/tree.json";

function formatName(id) {
  return id
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const items = Object.entries(tree)
  .map(([id, item]) => ({
    id,
    ...item,
    name: formatName(item.item ?? id),
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

function TreeList() {
  return (
    <SearchBar
      data={items}
      keys={["name"]}
      placeholder="Search crafting trees..."
    >
      {(results) => <TreeNav items={results} />}
    </SearchBar>
  );
}

export default TreeList;
