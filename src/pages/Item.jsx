import { useParams } from "react-router-dom";
import items from "../data/items.json";
import ItemHeader from "../components/item/ItemHeader";
import ItemInfo from "../components/item/ItemStats";

function Item() {
  const { id } = useParams();

  const item = items[id];

  if (!item) {
    return <h1>Item not found</h1>;
  }

  return (
    <>
      <ItemHeader item={item} />
      <ItemInfo item={item} />
    </>
  );
}

export default Item;
