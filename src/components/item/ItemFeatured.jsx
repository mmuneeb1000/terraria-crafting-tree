import { Link } from "react-router-dom";
import featured from "../../data/featured.json";
import items from "../../data/items.json";

function ItemFeatured() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-text">
          Featured Crafting Trees
        </h2>

        <p className="text-neutral-600">
          The most popular and challenging crafting trees in Terraria.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {featured.map((id) => {
          const item = items[id];

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

              <span className="mt-6 inline-flex items-center gap-2 text-green-400 group-hover:gap-3 transition-all">
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
