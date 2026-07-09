import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import HeroImg from "../assets/ui/terraria-hero-section.jpg";
import TreeList from "./TreeList";
import ItemPopular from "../components/item/ItemPopular";
import ItemFeatured from "../components/item/ItemFeatured";

function Home() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    async function loadPopular() {
      const res = await fetch("/data/popular.json");
      const data = await res.json();
      setPopular(data);
    }

    loadPopular();
  }, []);

  return (
    <>
      <section className="relative h-[650px] lg:h-[600px] overflow-hidden">
        <img
          src={HeroImg}
          alt="Terraria landscape"
          className="absolute inset-0 h-200 w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-background" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">
            Terraria Crafting Guide
          </p>

          <h2 className="max-w-4xl text-4xl font-bold text-white lg:text-7xl">
            Crafting Made Simple
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-gray-200">
            Browse complete crafting trees, discover every ingredient, and trace
            every recipe from raw materials to endgame items.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/search"
              className="rounded-xl border-2 border-accent bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-hover"
            >
              Browse Items
            </Link>

            <a
              href="#crafting-trees"
              className="rounded-xl border-2 border-accent bg-accent px-6 py-3 font-semibold text-black backdrop-blur hover:bg-background"
            >
              View Crafting Trees
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-10 text-center">
            <div>
              <p className="text-3xl font-bold text-black">6000+</p>
              <p className="text-sm font-semibold text-text">Items</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-black">2800+</p>
              <p className="text-sm font-semibold text-text">Recipes</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-black">100%</p>
              <p className="text-sm font-semibold text-text">Crafting Trees</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <ItemFeatured />
      </section>

      <section id="crafting-trees" className="mt-12">
        <TreeList />
      </section>
      <section>
        <ItemPopular title="Popular Items" items={popular} />
      </section>
    </>
  );
}

export default Home;
