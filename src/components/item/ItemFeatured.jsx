import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ItemFeatured() {
  const [featured, setFeatured] = useState([]);
  const [items, setItems] = useState({});

  useEffect(() => {
    async function loadData() {
      const [featuredRes, itemsRes] = await Promise.all([
        fetch("/data/featured.json"),
        fetch("/data/items.json"),
      ]);

      const [featuredData, itemsData] = await Promise.all([
        featuredRes.json(),
        itemsRes.json(),
      ]);

      setFeatured(featuredData);
      setItems(itemsData);
    }

    loadData();
  }, []);

  if (featured.length === 0) {
    return null;
  }

  return (
    <section className="lg:max-w-300 lg:mx-auto p-4 mt-2 lg:mt-10">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Featured Crafting Trees</h2>

        <p className="text-neutral-600">
          The most popular and challenging crafting trees in Terraria.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {featured.map((id) => {
          const item = items[id];
          if (!item) return null;

          return (
            <Link
              key={id}
              to={`/item/${id}`}
              className="group overflow-hidden rounded-2xl border border-zinc-700 bg-gradient-to-br from-slate-800 via-slate-900 to-black p-6 transition hover:-translate-y-1 hover:border-green-500"
            >
              <img
                src={`/images/${id}.png`}
                alt={item.name}
                className="mx-auto h-19 w-19 object-contain transition group-hover:scale-110"
              />

              <h3 className="mt-6 text-2xl font-bold text-white">
                {item.name}
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                View the complete crafting recipe and ingredient tree.
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-green-400 transition-all group-hover:gap-3">
                View Tree →
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default ItemFeatured;
