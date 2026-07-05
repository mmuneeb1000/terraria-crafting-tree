import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex gap-4 mx-2">
      <Link to="/" className="hover:underline font-semibold">
        Home
      </Link>
      <Link to="/trees" className="hover:underline font-semibold">
        Trees
      </Link>
      <Link to="/search" className="hover:underline font-semibold">
        Search
      </Link>

      <Link to="/about" className="hover:underline font-semibold">
        About
      </Link>
    </nav>
  );
}

export default Navbar;
