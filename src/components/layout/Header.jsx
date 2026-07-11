import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import SearchBar from "../search/SearchBar";
import Sitelogo from "../../assets/logos/terraria-recipes-150px.png";

function Header() {
  return (
    <header className="border-b border-accent w-full bg-background">
      <div
        className="p-2 flex flex-col lg:flex-row lg:gap-5 
      items-center justify-between gap-2"
      >
        <Link to="/" className="flex items-center text-xl font-bold gap-2">
          <img src={Sitelogo} alt="Terraria Recipes" className="w-20" />

          <h1 className="text-lg font-bold">Terraria Recipes</h1>
        </Link>

        <Navbar />
      </div>
    </header>
  );
}

export default Header;
