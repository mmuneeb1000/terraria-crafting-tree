import { Link } from "react-router-dom";

function Popular({ title = "Popular Items", items = [] }) {
  if (!items.length) return null;

  return (
    <section className="py-10">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>

      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 p-6">
        {items.map((item) => (
          <Link
            key={item.id}
            to={`/item/${item.id}`}
            className="group flex flex-col items-center rounded-xl border border-neutral-800 bg-background p-3 transition-all duration-200 hover:-translate-y-1 hover:border-green"
          >
            <img
              src={`../public/images/${item.id}.png`}
              alt={item.name}
              className="mb-4 h-6 w-6 object-contain transition-transform duration-200 group-hover:scale-110"
            />

            <h4 className="text-center text-sm font-medium text-indigo transition-colors group-hover:text-green">
              {item.name}
            </h4>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Popular;
