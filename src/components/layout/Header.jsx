import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import SearchBar from "../search/SearchBar";
import Sitelogo from "../../assets/logos/terraria-recipes-150px.png";

function Header() {
  return (
    <header className="border-b border-accent w-full bg-background">
      <div className="p-4 flex items-center justify-center">
        <div className="text-xl font-bold">
          <Link to="/" className="flex items-center gap-6">
            <img src={Sitelogo} alt="Terraria Recipes" className="w-20" />

            <h1 className="text-lg font-bold">Terraria Recipes</h1>
          </Link>
        </div>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
