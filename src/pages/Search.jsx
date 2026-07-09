import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/search/SearchBar";

function Search() {
  const [search, setSearch] = useState([]);

  useEffect(() => {
    fetch("/data/search.json")
      .then((res) => res.json())
      .then(setSearch)
      .catch(console.error);
  }, []);

  return (
    <section className="p-10 flex flex-col items-center justify-center">
      <SearchBar data={search} keys={["name"]} placeholder="Search items...">
        {(results, query) => (
          <>
            {!query ? (
              <>
                <h1 className="mb-6 text-3xl font-bold">All Items</h1>

                <div className="flex flex-wrap gap-4">
                  {results.map((item) => (
                    <Link
                      key={item.id}
                      to={`/item/${item.id}`}
                      className="rounded-xl border-2 border-accent bg-background p-2 hover:border-primary hover:bg-gray-100"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <div className="mt-2 max-h-96 overflow-y-auto rounded-xl border border-accent bg-background">
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
    </section>
  );
}

export default Search;
