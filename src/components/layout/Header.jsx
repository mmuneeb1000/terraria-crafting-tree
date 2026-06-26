import Navbar from "./Navbar";
import SearchBar from "../search/SearchBar";

function Header() {
  return (
    <header className="border-b w-2/3">
      <div className="p-4 flex items-center justify-between">
        <div className="text-xl font-bold">Logo</div>

        <Navbar />
      </div>
    </header>
  );
}

export default Header;
