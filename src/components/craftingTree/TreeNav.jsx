import { Link } from "react-router-dom";

function TreeNav({ items }) {
  return (
    <>
      <h1 className="text-center mb-2"> All Crafting Trees</h1>
      <section className="flex flex-wrap justify-center gap-4">
        {items.map((item) => (
          <Link
            key={item.id}
            to={`/item/${item.id}`}
            className="flex flex-nowrap gap-4 items-center w-75 h-16 border-2 border-accent text-black font-semibold 
          bg-background p-4 rounded-xl hover:border-primary"
          >
            <img
              src={`./images/${item.id}.png`}
              alt={item.name}
              className="inline-block w-6"
            />
            {item.name}
          </Link>
        ))}
      </section>
    </>
  );
}

export default TreeNav;
