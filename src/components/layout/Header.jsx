import Navbar from "./Navbar";
import SearchBar from "../search/SearchBar";

function Header() {
  return (
    <header className="border-b">
      <div className="p-4 flex items-center justify-between">
        <div className="text-xl font-bold">Logo</div>

        <Navbar />
      </div>

      <div className="p-4 border-t">
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;
