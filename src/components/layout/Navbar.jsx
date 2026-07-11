import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="flex justify-center text-sm font-semibold items-center gap-5 mx-2 
    lg:gap-8 lg:text-base"
    >
      <Link
        to="/"
        className="border-b-2 border-background hover:border-accent 
        active:border-accent focus:border:accent transition"
      >
        Home
      </Link>
      <Link
        to="/trees"
        className="border-b-2 border-background hover:border-accent 
        active:border-accent focus:border:accent transition"
      >
        Trees
      </Link>
      <Link
        to="/search"
        className="border-b-2 border-background hover:border-accent 
        active:border-accent focus:border:accent transition"
      >
        Search
      </Link>

      <Link
        to="/about"
        className="border-b-2 border-background hover:border-accent 
        active:border-accent focus:border:accent transition"
      >
        About
      </Link>
    </nav>
  );
}

export default Navbar;
