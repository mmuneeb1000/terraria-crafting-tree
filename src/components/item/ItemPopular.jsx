import { Link } from "react-router-dom";

function ItemPopular({ title = "Popular Items", items = [] }) {
  return (
    <section className="p-4">
      <h2 className="mb-6 text-center text-2xl font-bold">{title}</h2>

      <div className="lg:w-280 flex flex-wrap gap-4 mx-auto justify-center items-center">
        {items.map((item) => (
          <div
            key={item.id}
            className=" rounded-lg border-2 border-accent bg-background p-3 transition hover:border-primary"
          >
            <Link to={`/item/${item.id}`} className="flex justify-between">
              <img
                src={`/images/${item.id}.png`}
                alt={item.name}
                className="h-6 w-6 object-contain"
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ItemPopular;
