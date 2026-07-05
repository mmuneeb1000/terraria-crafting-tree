import Navbar from "./Navbar";
import SearchBar from "../search/SearchBar";
import Sitelogo from "../../assets/logos/terraria-recipes-150px.png";

function Header() {
  return (
    <header className="border-b-2 border-dashed border-accent w-full bg-surface">
      <div className="p-4 flex items-center justify-between">
        <div className=" text-xl font-bold">
          <a className="flex items-center gap-2" href="/trees">
            <img className="w-20" src={Sitelogo} />
            <h2>Terraria Recipes</h2>
          </a>
        </div>

        <Navbar />
      </div>
    </header>
  );
}

export default Header;
