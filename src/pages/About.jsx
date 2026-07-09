import Sitelogo from "../assets/logos/terraria-recipes-150px.png";

function About() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <div className="mb-12 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold text-indigo">
          About Terraria Recipes
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-indigo">
          A comprehensive Terraria crafting guide built to help players discover
          recipes, ingredients, crafting stations, and complete crafting trees
          for thousands of items.
        </p>
      </div>

      <div className="space-y-8 rounded-xl border border-accent bg-background p-8">
        <div>
          <h2 className="mb-3 text-2xl font-semibold text-indigo">
            Crafting Made Simple
          </h2>

          <p className="leading-8 text-neutral-600">
            Terraria Recipes is a searchable crafting database designed for
            players who want to quickly find how an item is crafted without
            navigating multiple wiki pages. Every item page includes detailed
            recipes, required crafting stations, ingredient lists, and complete
            crafting trees that clearly show every step needed to create an
            item.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-semibold text-indigo">
            Built for Every Player
          </h2>

          <p className="leading-8 text-neutral-600">
            Whether you're crafting your first Copper Bar, upgrading to
            Terraspark Boots, assembling the Cell Phone, or working toward the
            legendary Zenith, Terraria Recipes helps you understand even the
            most complex crafting chains. Fast search, clean layouts, and
            organized item pages make finding information quick and effortless.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-semibold text-indigo">
            Developer Note
          </h2>

          <p className="leading-8 text-neutral-600">
            Terraria Recipes is a personal passion project created to make
            Terraria's crafting system easier to explore. The goal is to provide
            a fast, lightweight, and modern alternative for browsing recipes and
            crafting trees while continuing to improve the database with new
            features and community feedback.
          </p>

          <p className="mt-4 text-sm text-neutral-800">
            Terraria Recipes is an unofficial fan project and is not affiliated
            with or endorsed by Re-Logic.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
