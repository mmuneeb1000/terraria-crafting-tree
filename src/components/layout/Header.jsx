import Navbar from "./Navbar";
import SearchBar from "../search/SearchBar";
import Sitelogo from "../../assets/logos/terraria-recipes-150px.png";

function Header() {
  return (
    <header className="border-b w-full bg-surface">
      <div className="p-4 flex items-center justify-between">
        <div className="text-xl font-bold">
          <a href="#">
            <img className="w-20" src={Sitelogo} />
          </a>
        </div>

        <Navbar />
      </div>
    </header>
  );
}

export default Header;
