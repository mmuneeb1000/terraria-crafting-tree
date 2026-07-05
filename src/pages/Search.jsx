import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Fuse from "fuse.js";
import search from "../data/search.json";

function Search() {
  const [query, setQuery] = useState("");

  const fuse = useMemo(() => {
    return new Fuse(search, {
      keys: ["name"],
      threshold: 0.3,
      ignoreLocation: true,
    });
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return search;

    return fuse.search(query).map((r) => r.item);
  }, [query, fuse]);

  return (
    <div className="p-4">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search items..."
        className="border p-2 w-full mb-4 rounded-xl"
      />

      <h1 className="text-center mb-4"> All Items </h1>
      <div className="flex flex-wrap justify-center gap-4">
        {results.map((item) => (
          <Link
            key={item.id}
            to={`/item/${item.id}`}
            className="border p-2 rounded-xl hover:bg-gray-100"
          >
            <div className="flex">{item.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Search;
