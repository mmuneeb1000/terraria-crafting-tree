import { Link } from "react-router-dom";

function ItemPopular({ title = "Popular Items", items = [] }) {
  return (
    <section className="p-4">
      <h2 className="mb-6 text-center text-2xl font-bold">{title}</h2>

      <div className="lg:w-280 flex flex-wrap gap-4 mb-6 mx-auto justify-center items-center">
        {items.map((item) => (
          <div
            key={item.id}
            className="w-54 rounded-lg border-2 border-accent bg-background p-2 transition hover:border-primary"
          >
            <Link to={`/item/${item.id}`} className="flex justify-between">
              <img
                src={`/images/${item.id}.png`}
                alt={item.name}
                className="mb-3 h-6 w-6 object-contain"
              />

              <h4 className="text-center font-medium">{item.name}</h4>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ItemPopular;
