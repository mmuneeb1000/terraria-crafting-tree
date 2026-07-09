import { useMemo, useState } from "react";
import Fuse from "fuse.js";

function SearchBar({
  data,
  keys = ["name"],
  threshold = 0.3,
  placeholder = "Search...",
  children,
}) {
  const [query, setQuery] = useState("");

  const fuse = useMemo(() => {
    return new Fuse(data, {
      keys,
      threshold,
      ignoreLocation: true,
    });
  }, [data, keys, threshold]);

  const results = useMemo(() => {
    if (!query.trim()) return data;

    return fuse.search(query).map((result) => result.item);
  }, [query, data, fuse]);

  return (
    <>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="border-2 border-accent hover:border-primary bg-background p-2 w-full mb-4 rounded-xl placeholder:text-text"
      />

      {children(results, query)}
    </>
  );
}

export default SearchBar;
