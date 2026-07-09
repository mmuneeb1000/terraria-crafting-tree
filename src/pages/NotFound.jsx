import { Link } from "react-router-dom";
import HeroImg from "../assets/ui/terraria-hero-section.jpg";

function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <div className="max-w-xl text-center">
        <img src={HeroImg} alt="Terraria" className="mx-auto mb-8 w-64" />

        <span className="text-6xl font-black text-green">404</span>

        <h1 className="mt-4 text-4xl font-bold">Page Not Found</h1>

        <p className="mt-4 text-lg text-neutral-600">
          The page you're looking for doesn't exist or may have been moved.
          Search for another Terraria item or return to the homepage.
        </p>

        <div className="mt-8 flex flex-col lg:flex-row justify-center gap-4">
          <Link
            to="/"
            className="rounded-lg bg-green px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Go Home
          </Link>

          <Link
            to="/trees"
            className="rounded-lg border-2 border-accent px-6 py-3 font-semibold transition hover:bg-accent"
          >
            Crafting Trees
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
