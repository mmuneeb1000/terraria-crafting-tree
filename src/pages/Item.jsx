import { useParams } from "react-router-dom";
import items from "../data/items.json";
import recipes from "../data/recipes.json";
import ItemHeader from "../components/item/ItemHeader";
import ItemInfo from "../components/item/ItemStats";
import ItemRecipes from "../components/item/ItemRecipes";
import ItemRecipeTrees from "../components/craftingTree/ItemRecipeTrees";

function Item() {
  const { id } = useParams();

  const item = items[id];
  const itemRecipes = recipes[id];
  const itemMap = items;

  if (!item) {
    return <h1>Item not found</h1>;
  }

  return (
    <>
      <ItemHeader item={item} />
      <ItemInfo item={item} />
      <ItemRecipes recipes={itemRecipes} itemMap={items} />
      <ItemRecipeTrees itemId={id} recipes={recipes} itemMap={itemMap} />
    </>
  );
}

export default Item;
