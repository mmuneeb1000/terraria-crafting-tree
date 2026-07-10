import { useEffect, useMemo, useState } from "react";
import { createMask } from "./createMask";
import { Link } from "react-router-dom";

const COLS = 48;
const ROWS = 14;

function shuffle(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

export default function TerrariaGrid({ text = "TERRARIA" }) {
  const [items, setItems] = useState([]);
  const [imageMap, setImageMap] = useState({});

  useEffect(() => {
    async function loadData() {
      const [itemsRes, imageMapRes] = await Promise.all([
        fetch("/data/items.json"),
        fetch("/data/imageMap.json"),
      ]);

      const itemsData = await itemsRes.json();
      const imageMapData = await imageMapRes.json();

      setItems(Object.values(itemsData));
      setImageMap(imageMapData);
    }

    loadData();
  }, []);

  const mask = useMemo(() => createMask(text, COLS, ROWS), [text]);

  const validItems = useMemo(() => {
    if (!items.length) return [];

    return items.filter(({ id }) => imageMap[id]);
  }, [items, imageMap]);

  const shuffled = useMemo(() => {
    if (!validItems.length) return [];

    return shuffle(validItems);
  }, [validItems]);

  if (!shuffled.length) {
    return null;
  }

  return (
    <div
      className="hidden lg:grid px-10 py-4 gap-1"
      style={{
        gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
      }}
    >
      {mask.flat().map((isLetter, i) => {
        const item = shuffled[i % shuffled.length];

        return (
          <Link
            key={item.id + i}
            to={`/item/${item.id}`}
            className={`aspect-square rounded transition ${
              isLetter ? "bg-background" : "bg-text"
            }`}
          >
            <img
              src={`/images/${item.id}.png`}
              alt={item.name}
              loading="lazy"
              className={`h-full w-full object-contain p-1 transition ${
                isLetter ? "animate-glow" : "opacity-60"
              }`}
            />
          </Link>
        );
      })}
    </div>
  );
}
