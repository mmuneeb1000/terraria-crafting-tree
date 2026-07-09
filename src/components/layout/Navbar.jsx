import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-center items-center gap-5 m-2 lg:gap-8">
      <Link
        to="/"
        className="border-b-2 border-background font-semibold hover:border-accent transition"
      >
        Home
      </Link>
      <Link
        to="/trees"
        className="font-semibold hover:border-b-2 hover:border-accent"
      >
        Trees
      </Link>
      <Link
        to="/search"
        className="font-semibold hover:border-b-2 hover:border-accent "
      >
        Search
      </Link>

      <Link
        to="/about"
        className="font-semibold hover:border-b-2 hover:border-accent"
      >
        About
      </Link>
    </nav>
  );
}

export default Navbar;
