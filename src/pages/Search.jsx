import { Link } from "react-router-dom";
import SearchBar from "../components/search/SearchBar";
import search from "../data/search.json";

function Search() {
  return (
    <SearchBar data={search} keys={["name"]} placeholder="Search items...">
      {(results, query) => (
        <>
          {!query ? (
            <>
              <h1 className="text-center mb-4">All Items</h1>

              <div className="flex flex-wrap justify-center gap-4">
                {results.map((item) => (
                  <Link
                    key={item.id}
                    to={`/item/${item.id}`}
                    className="border border-accent p-2 bg-background rounded-xl hover:bg-gray-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="mt-2 rounded-xl border border-accent bg-background max-h-96 overflow-y-auto">
              {results.map((item) => (
                <Link
                  key={item.id}
                  to={`/item/${item.id}`}
                  className="block px-4 py-2 hover:bg-surface"
                >
                  {item.name}
                </Link>
              ))}

              {results.length === 0 && (
                <p className="px-4 py-2 text-text">No items found.</p>
              )}
            </div>
          )}
        </>
      )}
    </SearchBar>
  );
}

export default Search;
