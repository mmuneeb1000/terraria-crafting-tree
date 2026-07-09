import { Link } from "react-router-dom";

function CategorySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-white">Browse Categories</h2>

        <p className="mt-2 text-neutral-400">
          Explore every Terraria item by category.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.slug}
            to={`/category/${category.slug}`}
            className="group rounded-xl border border-neutral-800 bg-neutral-900 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-lime-500 hover:bg-neutral-800"
          >
            <div className="flex items-center gap-4">
              <img
                src={category.icon}
                alt={category.name}
                className="h-12 w-12 object-contain transition-transform duration-200 group-hover:scale-110"
              />

              <div>
                <h3 className="text-lg font-semibold text-white">
                  {category.name}
                </h3>

                <p className="text-sm text-neutral-400">
                  {category.count.toLocaleString()} items
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
