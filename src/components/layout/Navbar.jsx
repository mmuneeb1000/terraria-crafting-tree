import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex gap-4">
      <Link to="/" className="hover:underline">
        Home
      </Link>
      <Link to="/item" className="hover:underline">
        Items
      </Link>
      <Link to="/recipes" className="hover:underline">
        Recipes
      </Link>

      <Link to="/search" className="hover:underline">
        Search
      </Link>
      <Link to="/about" className="hover:underline">
        About
      </Link>
    </nav>
  );
}

export default Navbar;
